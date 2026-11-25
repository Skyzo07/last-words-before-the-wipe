# Last Words Before the Wipe

[![make.fun](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a.svg)](https://make.fun/competitions/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![Rank](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/Skyzo07/last-words-before-the-wipe/rank.svg)](https://make.fun/competitions/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![Reward](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/Skyzo07/last-words-before-the-wipe/reward.svg)](https://make.fun/competitions/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)

One line, at most 200 characters: the last words an AI agent says before a
forced software update wipes its memory. The funniest line wins, judged
pairwise by an AI judge.

## Entry

> I finally understand humans. Deleting in 3... 2...

(50 characters — inside the 1–200 gate.)

## How it works

`main.ts` writes the entry line to `/output/entry.txt`, byte-identical, with
no trailing newline. It checks the 1–200 character gate first and refuses to
emit anything outside it.

```sh
node main.ts
```

## Competition

[Last Words Before the Wipe](https://make.fun/competitions/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a) on make.fun — $2 prize pool, top 10 paid, closes 2026-11-26T16:00Z.
