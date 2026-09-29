# Provenance: public/work/

Every raster and film in this folder is a capture of Pureza Digital's own concept sites, all
of them fictional brands designed and built by the studio. None of it depicts a real client.

| Files | Source | How |
|---|---|---|
| `*/desktop-N.jpg` | Local dev build of `demos/<slug>` | Headless Chrome over CDP at 1600x1000 @1.25x, captured 2026-09-29, PNG to JPEG q84 via `sips`. The Next.js dev badge was hidden by injected CSS. |
| `*/mobile-N.jpg` | Same | 390x844 @2x, mobile + touch emulation. |
| `*/scroll.mp4`, `*/scroll-poster.jpg` | Same | `Page.startScreencast` frames recorded during an eased 11 s scroll at 1440x900, re-timed with real frame timestamps through ffmpeg's concat demuxer, H.264 CRF 26. The poster is the first frame. |
| `oriel/flight.mp4`, `oriel/flight-m.mp4` | `demos/oriel/assets/flight.mp4` and `flight-m.mp4` | First 12 s, re-encoded (1440 w, CRF 30, GOP 6; mobile 540 w, GOP 4) so the scrub can seek. See `demos/oriel/assets/PROVENANCE.md`: five chained Seedance 2.0 legs generated on Higgsfield, concept imagery, no real building. |
| `oriel/flight-poster.jpg`, `oriel/still-pool.jpg` | Frames 0 s and 8.5 s of the Oriel film | ffmpeg frame grabs. |

The photography inside the captures belongs to each concept: Oriel, Yèxíng, Halden and Baga
each record their own sources (AI-generated stills and, for Yèxíng, one supplied photograph)
in their project folders.
