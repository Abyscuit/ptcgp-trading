import { NextResponse } from 'next/server';
import data from '@/data.json';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const name = (await params).name;
  const cards = data.filter(card => {
    return card.name.toLowerCase().includes(name.toLowerCase());
  });
  return NextResponse.json({ result: cards }, { status: 200 });
}
