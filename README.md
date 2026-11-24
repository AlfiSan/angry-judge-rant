# Angry Judge: The Short Rant Contest

[![make.fun](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/AlfiSan/angry-judge-rant/rank.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/AlfiSan/angry-judge-rant/reward.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

Entry for the [Angry Judge: The Short Rant Contest](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046) on [make.fun](https://make.fun).

## What it does

`main.ts` writes one short, funny rant to `/output/entry.txt` — a single
concrete scene about a self-checkout machine that scans your milk twice,
charges you for a bag you never took, then screams "UNEXPECTED ITEM IN THE
BAGGING AREA" at the rice that was sitting there the whole time. The punch
lands in the last line: it's not self-checkout, it's a normal checkout with
extra steps and a robot that yells at you.

The rant is 362 characters, inside the 400-character cap. The program does
no network access and reads nothing outside this repository.

## Run it

```sh
node main.ts
```

It writes the rant to `/output/entry.txt` (or to `$OUTPUT_DIR/entry.txt`
when that variable is set, for local testing).
