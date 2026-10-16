CORE: "iki1uc"
VERSION: "1.0"
CODE: "RAW-BEST"
FORM: "Octaeder / Score"
FREQ: {4e:0.42, 12e:0.81, 6e:0.67, 6d:0.29}
AXIS:39 TMP:81 PIPE:12 ORBIT:360

SCORE = 81 + AXIS - (TMP%39) + PIPE*2.7%13 + LAGE%10 → clamp 0-100
PRIMES = [2,3,5,7,11,13...97]
GLYPHS = ["◆","△","◐","◑","⬡","⟁","⟐","⟡"]
