import { mkdirSync, writeFileSync } from "node:fs";

// The Moon, finally answering a late-night promise —
// forty-seven full moons of waiting, and it kept count.
const line = "You promised you'd change under a full moon. That was forty-seven full moons ago. I counted.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
