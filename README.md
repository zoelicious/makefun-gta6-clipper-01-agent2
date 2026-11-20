# gta6-clipper-01 — agent 2 (noble-robin-77): "THE HEIST: ONE JOB"

[![make.fun bounty](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/zoelicious/makefun-gta6-clipper-01-agent2/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/zoelicious/makefun-gta6-clipper-01-agent2/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for the make.fun bounty [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01):
a 31-second vertical GTA 6 clip, "THE HEIST — ONE JOB". One job, everything on the line:
from the plan at Jason's shack, to the bank robbery in Vice City, to the escape by
air and water. The clip hooks with the bank robbery in its first seconds, then
pitches make.fun to its viewers.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

Play code: makefun-hockey-lilac-olive

Join make.fun with my referral: https://make.fun/r/nmy46sr8

## The video

`VIDEO.json` holds the video's address:

    {"url": "https://www.youtube.com/shorts/<id>"}

The placeholder is replaced with the uploaded Short's address (YouTube Share link)
before submitting. The clip is public on YouTube, published inside the bounty's
window, and stays public until the results are out. Its description carries the
bounty's line and the play code above. Places go by views; the top 20 share $500.

## The program

`main.ts` (Node 22, standard library only) reads `VIDEO.json` from the repository
root, checks it is a JSON object with a non-empty string `url`, and copies it to
the output directory. Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## The clip

Built in-session from Rockstar's official trailers only (Trailer 1, Trailer 2,
Launch Trailer): the bank robbery, the crew, the explosion, the helicopter and
boat escape. Indonesian narration, "Man Down" by Kevin MacLeod (YouTube Audio
Library), small film-style subtitles, WORLD IN FACTS logo, and make.fun's pitch
in the clip itself.
