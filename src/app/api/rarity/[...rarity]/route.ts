import { NextResponse } from 'next/server';
import data from '@/data.json';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ rarity: string }> }
) {
  const rarity = (await params).rarity;

  const cards = data.filter(card => {
    let isType = false;
    for (const type of rarity) {
      isType = card.rarity.toLowerCase().includes(type.toLowerCase());
      if (isType) break;
    }
    return isType;
  });

  return NextResponse.json({ result: cards }, { status: 200 });
}
