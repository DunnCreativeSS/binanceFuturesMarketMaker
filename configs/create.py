import json
a = 1
b = 1
c = 50
d = 1
while a <= 3:
	while b <= 3:
		while c <= 150:
			while d <= 3:
				json2 = {
"RISK_CHARGE_VOL": {"current": a, "min": 1, "max": 4, "step": 1},
"EWMA_WGT_COV": {"current": b, "min": 1, "max": 4, "step": 1},
"VOL_PRIOR":  {"current": c, "min": 50, "max": 300, "step": 50},
"DECAY_POS_LIM":  {"current": d, "min": 1, "max": 4, "step": 1}
}
				with open('config-' + str(a) + '-' + str(b) + '-' + str(c) + '-' + str(d) + '.json', 'w') as outfile:
   					json.dump(json2, outfile)
				d = d + 1
				print(a)
			d = 1	
			c = c + 50
		c = 50
		b = b + 1
	b = 1
	a = a + 1
