import json
a = 0.75
b = 1.25
c = 75
while a <= 1.5:
	while b <= 2.5:
		while c <= 150:
			json2 = {
"RISK_CHARGE_VOL": {"current": a, "min": 1, "max": 4, "step": 1},
"EWMA_WGT_COV": {"current": b, "min": 1, "max": 4, "step": 1},
"VOL_PRIOR":  {"current": c, "min": 50, "max": 300, "step": 50}
}
			with open('config-' + str(a) + '-' + str(b) + '-' + str(c) + '.json', 'w') as outfile:
					json.dump(json2, outfile)
			
			c = c * 2
		c = 75
		b = b * 2
	b = 1.25
	a = a * 2
