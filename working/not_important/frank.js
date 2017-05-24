var inside = require('point-in-polygon')

var RandburgCoords =
      [[-26.091847, 28.079061],
        [-26.091918, 28.078828],
        [-26.092313, 28.077486],
        [-26.092333, 28.076569],
        [-26.092349, 28.075273],
        [-26.092373, 28.074659],
        [-26.092285, 28.074654],
        [-26.092286, 28.07463],
        [-26.092289, 28.074533],
        [-26.092292, 28.074415],
        [-26.092295, 28.074247],
        [-26.092302, 28.073982],
        [-26.092306, 28.073845],
        [-26.092311, 28.073693],
        [-26.094551, 28.067491],
        [-26.095017, 28.066265],
        [-26.095125, 28.065969],
        [-26.095672, 28.064439],
        [-26.096204, 28.063008],
        [-26.096716, 28.061566],
        [-26.097222, 28.060204],
        [-26.097665, 28.058942],
        [-26.097799, 28.058583],
        [-26.097837, 28.058404],
        [-26.097902, 28.058191],
        [-26.098079, 28.057711],
        [-26.100711, 28.058957],
        [-26.102605, 28.05987],
        [-26.103876, 28.06051],
        [-26.104726, 28.060917],
        [-26.10494, 28.061007],
        [-26.105023, 28.061017],
        [-26.105214, 28.061042],
        [-26.105422, 28.061215],
        [-26.105458, 28.061245],
        [-26.105645, 28.061343],
        [-26.106127, 28.061587],
        [-26.107617, 28.062331],
        [-26.107571, 28.062441],
        [-26.106785, 28.064408],
        [-26.106154, 28.066004],
        [-26.106371, 28.066126],
        [-26.106514, 28.066167],
        [-26.106652, 28.066146],
        [-26.107204, 28.065861],
        [-26.107888, 28.06551],
        [-26.108394, 28.065257],
        [-26.108453, 28.065201],
        [-26.109283, 28.06316],
        [-26.110184, 28.061033],
        [-26.110238, 28.061001],
        [-26.11033, 28.060888],
        [-26.110684, 28.060079],
        [-26.111145, 28.058889],
        [-26.111603, 28.057842],
        [-26.112198, 28.058175],
        [-26.11254, 28.057295],
        [-26.112579, 28.057009],
        [-26.112912, 28.05612],
        [-26.113064, 28.055863],
        [-26.113309, 28.05521],
        [-26.113453, 28.054739],
        [-26.113628, 28.054357],
        [-26.113828, 28.053824],
        [-26.113877, 28.053684],
        [-26.114033, 28.053782],
        [-26.115134, 28.050953],
        [-26.114143, 28.050571],
        [-26.1142, 28.050502],
        [-26.114386, 28.050192],
        [-26.11456, 28.049809],
        [-26.11476, 28.049291],
        [-26.115154, 28.048166],
        [-26.115309, 28.047768],
        [-26.11548, 28.047439],
        [-26.115593, 28.047253],
        [-26.115709, 28.047104],
        [-26.11576, 28.047038],
        [-26.115915, 28.046867],
        [-26.11609, 28.046712],
        [-26.116271, 28.046572],
        [-26.116495, 28.046439],
        [-26.116748, 28.046326],
        [-26.116953, 28.04625],
        [-26.117271, 28.046186],
        [-26.117517, 28.046163],
        [-26.117718, 28.046155],
        [-26.118077, 28.046204],
        [-26.11916, 28.046606],
        [-26.121662, 28.047527],
        [-26.123341, 28.048124],
        [-26.124222, 28.048409],
        [-26.124609, 28.048571],
        [-26.126378, 28.049253],
        [-26.12787, 28.049756],
        [-26.129095, 28.050171],
        [-26.129083, 28.050209],
        [-26.129065, 28.050268],
        [-26.128857, 28.050944],
        [-26.128786, 28.051177],
        [-26.128626, 28.051699],
        [-26.128603, 28.051773],
        [-26.12858, 28.051848],
        [-26.128424, 28.052356],
        [-26.128352, 28.052592],
        [-26.128273, 28.052847],
        [-26.128123, 28.053337],
        [-26.1281, 28.05341],
        [-26.128077, 28.053486],
        [-26.127848, 28.054232],
        [-26.127667, 28.054823],
        [-26.127637, 28.054921],
        [-26.12762, 28.054976],
        [-26.127597, 28.055051],
        [-26.127574, 28.055125],
        [-26.127345, 28.05587],
        [-26.127117, 28.056616],
        [-26.127094, 28.056691],
        [-26.127071, 28.056765],
        [-26.126613, 28.058255],
        [-26.126591, 28.05833],
        [-26.126568, 28.058404],
        [-26.126373, 28.05904],
        [-26.126339, 28.059149],
        [-26.126177, 28.059676],
        [-26.126028, 28.059847],
        [-26.125655, 28.061105],
        [-26.12511, 28.062879],
        [-26.124491, 28.064875],
        [-26.124028, 28.066392],
        [-26.123266, 28.068896],
        [-26.122852, 28.070224],
        [-26.122816, 28.070442],
        [-26.122771, 28.070583],
        [-26.122751, 28.070645],
        [-26.122726, 28.070723],
        [-26.122713, 28.070761],
        [-26.122685, 28.070848],
        [-26.122635, 28.071004],
        [-26.122592, 28.071115],
        [-26.122565, 28.071184],
        [-26.122561, 28.071223],
        [-26.122549, 28.07131],
        [-26.122537, 28.071384],
        [-26.12247, 28.071677],
        [-26.122471, 28.071734],
        [-26.122305, 28.072278],
        [-26.122091, 28.072977],
        [-26.121704, 28.074297],
        [-26.121261, 28.07574],
        [-26.121147, 28.076093],
        [-26.120653, 28.077665],
        [-26.119802, 28.080441],
        [-26.119618, 28.081212],
        [-26.119028, 28.083166],
        [-26.118643, 28.084318],
        [-26.118425, 28.084941],
        [-26.117505, 28.087817],
        [-26.117958, 28.088193],
        [-26.11729, 28.08913],
        [-26.11695, 28.089642],
        [-26.116781, 28.090169],
        [-26.116644, 28.090614],
        [-26.116402, 28.091382],
        [-26.116377, 28.091465],
        [-26.116266, 28.091809],
        [-26.116093, 28.091747],
        [-26.115226, 28.091356],
        [-26.113585, 28.090618],
        [-26.11114, 28.089504],
        [-26.110994, 28.090013],
        [-26.110827, 28.090637],
        [-26.110746, 28.090928],
        [-26.110477, 28.091835],
        [-26.110451, 28.091901],
        [-26.10941, 28.09154],
        [-26.108463, 28.091204],
        [-26.108427, 28.091186],
        [-26.108162, 28.091049],
        [-26.108172, 28.091016],
        [-26.108138, 28.091003],
        [-26.107772, 28.090877],
        [-26.107528, 28.090788],
        [-26.107271, 28.09069],
        [-26.107086, 28.090622],
        [-26.106708, 28.090498],
        [-26.105675, 28.090108],
        [-26.105955, 28.089135],
        [-26.105662, 28.089025],
        [-26.104905, 28.088751],
        [-26.103944, 28.088398],
        [-26.103472, 28.088222],
        [-26.103759, 28.087271],
        [-26.103089, 28.087024],
        [-26.101006, 28.086264],
        [-26.10119, 28.085649],
        [-26.101201, 28.085508],
        [-26.101095, 28.085506],
        [-26.099708, 28.085577],
        [-26.098193, 28.085608],
        [-26.096725, 28.085639],
        [-26.09662, 28.085639],
        [-26.096747, 28.085178],
        [-26.096964, 28.084631],
        [-26.097196, 28.084054],
        [-26.097327, 28.083727],
        [-26.097399, 28.083543],
        [-26.097717, 28.082749],
        [-26.097675, 28.082627],
        [-26.097624, 28.082538],
        [-26.097613, 28.082521],
        [-26.097483, 28.082332],
        [-26.097395, 28.082203],
        [-26.097354, 28.082193],
        [-26.09703, 28.08233],
        [-26.09678, 28.082259],
        [-26.096606, 28.08221],
        [-26.09688, 28.081927],
        [-26.096955, 28.081832],
        [-26.097095, 28.081657],
        [-26.097269, 28.08138],
        [-26.097426, 28.081063],
        [-26.098283, 28.07886],
        [-26.098156, 28.078851],
        [-26.098118, 28.078853],
        [-26.097746, 28.078865],
        [-26.097716, 28.078866],
        [-26.09768, 28.078866],
        [-26.09764, 28.078867],
        [-26.097601, 28.07895],
        [-26.097515, 28.07898],
        [-26.093995, 28.079081],
        [-26.093939, 28.079071],
        [-26.093918, 28.078985],
        [-26.093701, 28.078992],
        [-26.091847, 28.079061]
      ]; /* do you really need to add a 300 line list for each ward? */

var spoint = [
    [-26.02098, 27.99374],
    [-26.10592, 28.05424],
    [-26.0473, 28.02468],
    [-26.02055638, 28.01402092],
    [-26.02974, 28.00953],
    [-26.02974, 28.00953],
    [-26.0535393, 28.0900707],
    [-26.0263, 28.02082],
    [-26.1000195, 28.0852394],
    [-26.05528594, 28.06175962],
    [-26.09712, 28.05256],
    [-26.0654251, 28.06162],
    [-26.10181532, 28.05716652],
    [-26.00877879, 28.01247843],
    [-26.13487, 28.04851],
    [-26.10305709, 28.04313898],
    [-26.03591, 28.01124],
    [-26.03591403, 28.06496499],
    [-26.08883, 28.0807],
    [-26.05, 27.9667],
    [-26.0212499, 28.01469],
    [-26.01682, 27.99649],
    [-26.10644, 28.06508],
    [-26.0987314, 28.0457445],
    [-26.05881, 28.04687],
    [-26.0397976, 28.0140279],
    [-26.05314384, 28.02061007],
    [-26.1160453, 28.0889583],
    [-26.10016, 28.03717],
    [-26.0944724, 28.08311462],
    [-26.11377, 28.072],
    [-26.05, 27.9667],
    [-26.03270382, 28.06296587],
    [-26.06344, 28.08743],
    [-26.10244505, 28.05713049],
    [-26.02868, 28.00134],
    [-26.0590699, 28.00301],
    [-26.1061401, 28.0832481],
    [-26.06384469, 28.11109422],
    [-30.14512718, 25.3125],
    [-26.10592, 28.05424],
    [-26.08212, 28.09263],
    [-26.02780643, 28.03011417],
    [-26.10252299, 28.04979061],
    [-26.10742309, 28.05481913],
    [-26.1038098, 28.05843982],
    [-29.53522956, 25.3125],
    [-26.10177024, 28.0569413],
    [-26.1008, 28.06494],
    [-26.10362, 28.07162],
    [-26.08889346, 28.08075428],
    [-26.12541, 28.0342],
    [-26.02559, 28.021],
    [-26.10464, 28.05577],
    [-26.09228, 28.05618],
    [-26.04513, 28.08921],
    [-26.01696644, 27.99995355],
    [-26.11170229, 28.05880329],
    [-26.05179012, 28.09234142],
    [-26.1041203, 28.0608218],
    [-26.1297647, 28.05003316],
    [-26.07858064, 28.08811608],
    [-26.0892105, 28.0935982],
    [-26.1076799, 28.05512],
    [-26.04513, 28.08921],
    [-26.0199738, 28.01368416],
    [-26.08353859, 28.08497469],
    [-26.02048, 28.01389],
    [-26.0534, 28.05347],
    [-26.10464, 28.05577],
    [-26.09531, 28.05618],
    [-26.03062708, 28.0738151],
    [-26.05826042, 28.06023828],
    [-26.05695638, 28.08535695],
    [-26.10573, 28.06846],
    [-26.0319499, 28.04712],
    [-26.0987314, 28.0457445],
    [-26.0585387, 28.06015298],
    [-26.0991, 28.0469997],
    [-26.03631041, 28.05946114],
    [-26.51112956, 27.86729164],
    [-26.02816, 27.99133],
    [-26.0114899, 28.02373],
    [-26.03195, 28.04712],
    [-26.09273805, 28.0536786],
    [-26.0829967, 28.06025499],
    [-26.03012002, 28.06178492],
    [-26.00111785, 28.01434278],
    [-26.05017, 28.1073],
    [-26.07981066, 28.09057409],
    [-26.08874, 28.09146],
    [-26.0926926, 28.0543949],
    [-26.10737082, 28.05466723],
    [-26.0756607, 28.0264606],
    [-26.09893254, 28.0461697],
    [-26.0566597, 28.0471992],
    [-26.10592, 28.05424],
    [-26.0926926, 28.0543949],
    [-26.02048, 28.01389],
    [-26.0604799, 28.04134],
    [-26.05202473, 28.02336851],
    [-26.09228, 28.05618],
    [-26.05314, 28.05882],
    [-26.04805022, 28.06532621],
    [-26.09228, 28.05618],
    [-26.09228, 28.05618],
    [-26.04938, 28.04918],
    [-26.0326999, 28.01004],
    [-26.05384, 28.11226],
    [-26.05, 27.9667],
    [-26.064565, 28.053525],
    [-26.0325099, 28.06956],
    [-26.03264598, 28.07747126],
    [-26.10537703, 28.04597738],
    [-26.06734604, 28.07335138],
    [-26.09602, 28.10365],
    [-26.10592, 28.05424],
    [-26.0613, 28.02384],
    [-26.10774578, 28.05352613],
    [-26.0570355, 28.10674773],
    [-26.07943, 28.11566],
    [-26.0961704, 28.0796604],
    [-26.0763302, 28.0789108],
    [-26.01036051, 28.02572792],
    [-26.08719, 28.05888],
    [-26.02449441, 28.01790525],
    [-26.10908, 28.05611],
    [-26.03369, 28.06711],
    [-26.04513, 28.08921],
    [-26.13172373, 28.06853323],
    [-26.1078892, 28.0537605],
    [-26.0473, 28.02468],
    [-26.09964, 28.03086],
    [-26.0373899, 28.00574],
    [-26.0754395, 28.0992298],
    [-26.09897817, 28.04626933],
    [-26.0926926, 28.0543949],
    [-26.06039343, 28.04173297],
    [-26.0442009, 28.0015602],
    [-26.01074, 27.994505],
    [-26.1076045, 28.05760145],
    [-26.11463723, 28.05541277],
    [-25.79989118, 26.015625],
    [-26.0756147, 28.02756071],
    [-26.0669, 28.07565],
    [-26.1078892, 28.0537605],
    [-26.05, 27.9667],
    [-26.10527, 28.06111],
    [-26.08125847, 28.01079726],
    [-26.04268, 28.01573],
    [-26.02748982, 28.02975587],
    [-26.09966893, 28.04934789],
    [-26.04531118, 28.06530605],
    [-26.04846722, 28.05195609],
    [-26.05255657, 28.09892103],
    [-26.10483, 28.04935],
    [-26.05, 27.9667],
    [-26.03507019, 28.07835852],
    [-26.04862, 28.01705],
    [-26.0948241, 28.0391716],
    [-26.11376, 28.06872],
    [-26.0292299, 28.07967],
    [-26.1027453, 28.0537757],
    [-26.09947, 28.03253],
    [-26.11521, 28.06995],
    [-26.02542603, 28.03179028],
    [-26.1067493, 28.0536016],
    [-26.0357999, 28.09096],
    [-26.10707, 28.05308],
    [-33.95691, 25.61358],
    [-26.1289326, 28.04912567],
    [-26.05182, 28.06186],
    [-26.04967, 28.0654],
    [-26.09218457, 28.05604602],
    [-26.0093708, 28.0186691],
    [-26.05735271, 28.05922884],
    [-26.01326731, 28.02565098],
    [-26.0954331, 28.0560722],
    [-26.10561, 28.04525],
    [-26.1076799, 28.05512],
    [-26.0366365, 27.9892422],
    [-26.0403869, 28.0500641],
    [-26.10739255, 28.05712938],
    [-26.02414746, 27.99000873],
    [-26.0486507, 28.0593605],
    [-26.0970192, 28.0551605],
    [-26.04941, 28.00849],
    [-26.03676684, 28.07925975],
    [-25.9934997, 28.01363468],
    [-26.13218, 28.0658],
    [-26.05113, 28.09145],
    [-26.06344, 28.08743],
    [-26.10713385, 28.04731059],
    [-26.04446992, 28.02384908],
    [-26.05, 27.9667],
    [-26.026476, 27.95149326],
    [-26.10592, 28.05424],
    [-26.1151092, 28.0490931],
    [-26.03957, 27.99482],
    [-26.07806, 28.04531],
    [-26.0623822, 28.0859536],
    [-26.1076799, 28.05512],
    [-26.0326999, 28.06376],
    [-26.0954354, 28.0565683],
    [-26.2312, 27.91969],
    [-26.0905999, 28.08065],
    [-26.10052115, 28.06641743],
    [-26.07679039, 28.02653074],
    [-26.1230238, 28.06945087],
    [-26.0665799, 28.06312],
    [-25.9938, 28.01139],
    [-26.0361699, 28.05168],
    [-26.10163, 28.06819],
    [-26.07976132, 28.07370133],
    [-26.10736024, 28.0548167],
    [-26.50443619, 27.87523529],
    [-26.0114899, 28.02373],
    [-26.0651732, 28.0905014],
    [-26.04186177, 28.02281857],
    [-26.0325099, 28.06956],
    [-26.0581, 28.10762],
    [-26.0920105, 28.0505505],
    [-26.0870098, 28.0589808],
    [-26.0954354, 28.0565683],
    [-26.05019, 27.99911],
    [-26.108, 28.04875],
    [-26.1012116, 28.0564822],
    [-26.05781, 28.02262],
    [-26.09219, 28.02161],
    [-26.10173, 28.05628],
    [-26.10905, 28.0487],
    [-26.0599899, 28.0606003],
    [-26.51142344, 27.8669786],
    [-26.03385, 28.06363],
    [-26.0972633, 28.0569763],
    [-26.0701987, 28.04496288],
    [-26.02868, 28.00134],
    [-26.0850858, 28.1184023],
    [-26.0781097, 28.0898094],
    [-26.10203, 28.05857],
    [-26.0630902, 28.0441715],
    [-26.04391332, 28.05954688],
    [-26.05594, 28.0613],
    [51.53090311, -0.03956679],
    [-26.0036182, 28.0299381],
    [-26.0946399, 28.08266],
    [-26.02516241, 28.05219372],
    [-26.01662265, 27.99951553],
    [-26.04898, 28.1042],
    [-26.0325099, 28.06956],
    [-23.045493, 29.89955356],
    [-26.0323032, 28.0646838],
    [-26.02906089, 28.06040674],
    [-26.0954354, 28.0565683],
    [-26.00252089, 28.01281393],
    [-26.10600548, 28.03060169],
    [-26.0221899, 28.01626],
    [-26.0380538, 28.07974306],
    [-26.1078892, 28.0537605],
    [-26.0680904, 28.0741291],
    [-13.24006038, 23.90696883],
    [-26.108, 28.04875],
    [-26.0407009, 27.9911804],
    [-26.13606637, 28.05796],
    [-26.09922, 28.04585],
    [-26.11136, 28.05288],
    [-26.0359, 28.00626],
    [-26.07976132, 28.07370133],
    [-26.0473, 28.02468],
    [-26.03616, 28.04508],
    [-26.05, 27.9667],
    [-26.0289593, 28.0785198],
    [-26.05, 27.9667],
    [-26.0391006, 27.9949093],
    [-26.06574, 28.0783],
    [-26.10935, 28.04924],
    [-26.12353832, 28.05193663],
    [-26.10026381, 28.06603469],
    [-26.01618, 28.01017],
    [-26.0921762, 28.09081514],
    [-26.07528705, 28.06406021],
    [-26.042315, 28.09084],
    [-26.0328693, 28.0036392],
    [-26.07868859, 28.0878185],
    [-26.03235, 27.99559],
    [-26.10687479, 28.05428883],
    [-26.08423, 28.09295],
    [-26.09398341, 28.02107922],
    [-26.01435387, 28.02558426],
    [-26.08852295, 28.07604009],
    [-26.0953102, 28.056179],
    [-26.1078892, 28.0537605],
    [-25.5478999, 27.08471],
    [-26.1360855, 28.0528507],
    [-26.04918, 28.06297],
    [-26.0299799, 28.0281],
    [-26.09038, 28.08268],
    [-26.09115, 28.04526],
    [-26.0199108, 28.0008392],
    [-26.1175982, 28.0464814],
    [-26.0114899, 28.02373],
    [-26.05, 27.9667],
    [-26.0437022, 28.01164251],
    [-26.0533409, 28.0155792],
    [-25.99062, 28.01256],
    [-26.10592, 28.05424],
    [-26.10165, 28.03966],
    [-26.10590429, 28.06793274],
    [-25.99378901, 28.01372051],
    [-26.0874901, 28.0699501],
    [-26.10098877, 28.05557731],
    [-26.10592, 28.05424],
    [-26.0890759, 28.0931031],
    [-26.05, 27.9667],
    [-26.0870098, 28.0589808],
    [-26.085977, 28.043379],
    [-26.0573294, 28.1090778],
    [-26.05437041, 28.06166268],
    [-26.10592, 28.05424],
    [-26.0657, 28.07862],
    [-26.00812, 28.00378],
    [-26.090973, 28.0619366],
    [-26.08456, 28.08205],
    [-26.01372553, 28.02632],
    [-26.01618, 28.01017],
    [-26.03979, 28.02711],
    [-26.13440553, 28.05633431],
    [-26.11033, 28.05787],
    [-26.02807, 28.02893],
    [-26.03171669, 28.03924056],
    [-25.9926605, 28.0100994],
    [-26.1008, 28.06494],
    [-26.09834, 28.0665],
    [-26.10629534, 28.06619002],
    [-26.11288, 28.04857],
    [-26.0669, 28.07565],
    [-26.0943, 28.04532],
    [-26.10055683, 28.05006587],
    [-26.2044, 28.0456],
    [-26.09228, 28.05618],
    [-26.03269, 28.00986],
    [-26.20944043, 28.03583822],
    [-26.0413457, 28.0863585],
    [-26.04053, 27.98904],
    [-26.0759802, 28.01169058],
    [-26.0326, 27.99067],
    [-26.11909, 28.081985],
    [-26.10592, 28.05424],
    [-26.09556794, 28.02241048],
    [-26.01557696, 28.02091871],
    [-26.1092117, 28.0487106],
    [-26.10203, 28.05857],
    [-26.02943551, 28.07562488],
    [-26.05142384, 28.05813789],
    [-26.07475, 28.09295],
    [-26.05749, 28.06021],
    [-26.1076799, 28.05512],
    [-26.10358, 28.07168],
    [-26.10236, 28.05433],
    [-26.07403, 28.09253],
    [-26.02246494, 28.01621869],
    [-26.09038, 28.08268],
    [-26.10497, 28.05659],
    [-26.0995998, 28.0549393],
    [-26.03954, 28.04588],
    [-26.10659539, 28.05403912],
    [-26.1052303, 28.0610199],
    [-26.08918514, 28.08115023],
    [-26.07106071, 28.11552515],
    [-25.95433, 28.12326],
    [-26.10592, 28.05424],
    [-26.03542987, 28.06466684],
    [-26.19848408, 28.00852038],
    [-26.0954354, 28.0565683],
    [-26.07302, 28.06466],
    [-26.08725538, 28.08384418],
    [-26.0361595, 27.9893904],
    [-26.1141396, 28.0445404],
    [-26.01211, 28.01476],
    [-26.09228, 28.05618],
    [-26.0450219, 28.0680851],
    [-26.10497, 28.05659],
    [53.38128096, -2.47751901],
    [-26.0604897, 28.0593796],
    [-26.06553709, 28.07470971],
    [-26.0574608, 28.1032295],
    [-26.064565, 28.053525],
    [-26.10367, 28.04922],
    [-26.06468965, 27.99693978],
    [-26.03722146, 28.07928629],
    [-26.0473, 28.02468],
    [-26.059605, 28.02258],
    [-26.07421691, 28.11310948],
    [-26.08184909, 28.02644668],
    [-26.01063, 28.00275],
    [-26.0954354, 28.0565683],
    [-26.10497, 28.05659],
    [-26.10772319, 28.05341426],
    [-25.99523553, 28.01515818],
    [-26.08295, 28.09843],
    [-26.02898486, 28.02821161],
    [-26.02676, 28.00951],
    [-26.06162124, 28.06072891],
    [-26.0669, 28.07565],
    [-26.09152, 28.05015],
    [-26.05735915, 28.06057333],
    [-26.09053, 28.07696],
    [-25.9372599, 28.14198],
    [-26.0533849, 28.0911094],
    [-26.1047497, 28.0795898],
    [-26.06654155, 28.06673945],
    [-26.038, 28.08065],
    [-26.0629193, 28.0816514],
    [-26.10076405, 28.0492115],
    [-26.0594341, 28.070466],
    [-26.0204792, 28.0138893],
    [-26.12558541, 28.04924744],
    [-26.03766577, 28.0800354],
    [-26.09718, 28.05657],
    [-26.10293162, 28.04739626],
    [-26.11026, 28.0587],
    [-26.0892105, 28.0935982],
    [-26.1076799, 28.05512],
    [-26.0950415, 28.0405048],
    [-26.09847, 28.08966],
    [-26.19119, 28.0956],
    [-26.04163, 28.03177],
    [-26.10818733, 28.05292472],
    [-26.109211, 28.0487099],
    [-26.05794979, 28.02364624],
    [-26.08105, 28.05839],
    [-26.03519, 28.06521],
    [-26.11061, 28.05297],
    [-26.07565136, 27.979938],
    [-26.05366, 28.07137],
    [-26.06096, 28.05674],
    [-26.07186, 28.06659],
    [-26.0926304, 28.0653896],
    [-26.1067493, 28.0536016],
    [-26.10068604, 28.03895964],
    [-26.10877, 28.11697],
    [-26.05, 27.9667],
    [-26.0987314, 28.0457445],
    [-26.02246494, 28.01621869],
    [-26.05502011, 28.06068985],
    [-26.11457035, 28.05028471],
    [-26.05617, 28.01435],
    [-26.22569407, 27.93716926],
    [-26.05017151, 28.10366403],
    [-26.03519, 28.06521],
    [-26.09228, 28.05618],
    [-26.10592, 28.05424],
    [-26.05, 27.9667],
    [-26.10257945, 28.07108691],
    [-26.1049709, 28.0565891],
    [-26.01676, 28.00076],
    [-26.03163, 27.99857],
    [-26.10497, 28.05659],
    [-26.06722, 28.03173],
    [-26.05, 27.9667],
    [-26.0715219, 28.0895359],
    [-26.10221199, 28.04787388],
    [-26.11684, 28.08135],
    [-26.03598159, 28.01333799],
    [-26.08977, 28.08469],
    [-26.02868, 28.00134],
    [-26.1117, 28.06052],
    [-26.10251295, 28.0820601],
    [-26.0835409, 28.0610411],
    [-25.9964692, 27.9877357],
    [-26.05, 27.9667],
    [-26.2044, 28.0456],
    [-26.10908, 28.05611],
    [-26.10912669, 28.05361032],
    [-26.07904, 28.09044],
    [-26.05983, 28.05994],
    [-26.02432159, 27.98936563],
    [-26.101815, 28.702525],
    [-26.10771048, 28.05172205],
    [-26.07223, 28.0643],
    [-26.1011864, 28.0565429],
    [-26.10509568, 28.0454874],
    [-26.08916326, 28.083179],
    [-26.06644, 28.04422],
    [-26.05889472, 28.04671851],
    [-26.1150665, 28.049221],
    [-26.13614713, 28.05249369],
    [-26.05, 27.9667],
    [-26.0885399, 28.01966],
    [-26.09228, 28.05618],
    [-26.05346, 28.06545],
    [-26.0987314, 28.0457445],
    [-26.0592189, 28.0594493],
    [-26.01901375, 28.00730467],
    [-26.03235, 27.99559],
    [-26.01989, 28.07202],
    [-26.10592, 28.05424],
    [-26.10071, 28.06922],
    [-26.106665, 28.04373],
    [-26.10592, 28.05424],
    [-26.01231, 28.0112],
    [-26.0290357, 28.0476472],
    [-26.10592, 28.05424],
    [-26.0697699, 28.05446],
    [-26.09913, 28.03856],
    [-26.05, 27.9667],
    [-26.089365, 28.0748037],
    [-26.10592, 28.05424],
    [-26.03632612, 28.07905085],
    [-26.09228, 28.05618]
];

var dict = [];

var poly_dict = {'Randburg': RandburgCoords}

/* checks for point in list of polygons and marks where it falls within */
for (var key in poly_dict){
  // key = location
  // poly_dict[key] = polygon
  for (var i = 0; i < spoint.length; i++){ /* loop through location dict */
    if(inside(spoint[i] /* eventually make it read from dict*/,  poly_dict[key])) {
      console.log("fuck yes")
      dict.push({
        co: spoint[i], /* make this the key from the location_dict */
        ward: key
      });
    }
    else {
      console.log("kill yourself")
      /* take this out to avoid overwriting the dict */
      dict.push({
        co: spoint[i],
        ward: "" /* must not write anything */
      })
    }
  };

};

console.log(dict)
// revert ** new
