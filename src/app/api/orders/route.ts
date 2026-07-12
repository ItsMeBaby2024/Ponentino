import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface Order {
  id: string;
  table: string;
  drinkName: string;
  category: 'cocktail' | 'mocktail';
  price: string;
  mbti: string;
  hktTimestamp: string;
  isoTimestamp: string;
}

const FILE_PATH = path.join(process.cwd(), 'orders.json');

// Helper to read orders safely
function readOrders(): Order[] {
  try {
    if (!fs.existsSync(FILE_PATH)) {
      return [];
    }
    const data = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading orders file:', err);
    return [];
  }
}

// Helper to write orders safely
function writeOrders(orders: Order[]): boolean {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(orders, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing orders file:', err);
    return false;
  }
}

export async function GET() {
  const orders = readOrders();
  
  // Sort orders by closest (most recent) timestamp first
  const sortedOrders = [...orders].sort(
    (a, b) => new Date(b.isoTimestamp).getTime() - new Date(a.isoTimestamp).getTime()
  );

  return NextResponse.json(sortedOrders);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { table, drinkName, category, price, mbti } = body;

    if (!table || !drinkName || !category) {
      return NextResponse.json({ error: 'Missing required order details' }, { status: 400 });
    }

    // Get HKT (Hong Kong Time) formatted timestamp
    const now = new Date();
    const hktFormatter = new Intl.DateTimeFormat('zh-HK', {
      timeZone: 'Asia/Hong_Kong',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
    
    // Replace slash separators with dashes for consistency if wanted, e.g. "2026-07-12 23:15:30"
    const hktTimestamp = hktFormatter.format(now).replace(/\//g, '-');

    const newOrder: Order = {
      id: Math.random().toString(36).substring(2, 11),
      table,
      drinkName,
      category,
      price,
      mbti,
      hktTimestamp,
      isoTimestamp: now.toISOString()
    };

    const orders = readOrders();
    orders.push(newOrder);
    
    if (writeOrders(orders)) {
      return NextResponse.json({ success: true, order: newOrder });
    } else {
      return NextResponse.json({ error: 'Failed to write order data' }, { status: 500 });
    }
  } catch (err) {
    console.error('Error in POST /api/orders:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Missing order ID' }, { status: 400 });
    }

    const orders = readOrders();
    const updatedOrders = orders.filter((o) => o.id !== id);

    if (writeOrders(updatedOrders)) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: 'Failed to delete order data' }, { status: 500 });
    }
  } catch (err) {
    console.error('Error in DELETE /api/orders:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
