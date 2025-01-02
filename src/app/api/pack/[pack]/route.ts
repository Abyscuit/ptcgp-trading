import { NextResponse } from 'next/server';
import data from '@/data.json';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ pack: string }> }
) {
  const pack = (await params).pack;
  const cards = data.filter(card => {
    return card.pack.toLowerCase().includes(pack.toLowerCase());
  });
  return NextResponse.json({ result: cards }, { status: 200 });
}
