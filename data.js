var APP_DATA = {
  /* PROMJENA POLOŽAJA TOČKICA XY, MAP CONTAINER 1 ILI 2 POZIVA NA SLIKU MAPE*/
  "scenes": [
    {
      "id": "0-ulaz",
      "name": "Ulaz",
      "mapcontainer": "1",
      "x": "42%",
      "y": "40%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.10105750243915246,
        "pitch": 0.09393712069449833,
        "fov": 1.4742329502908464
      },
      "linkHotspots": [
        {
          "yaw": -0.01654924212881781,
          "pitch": 0.11156185136308672,
          "rotation": 0,
          "target": "1-hodnik"
        },
        {
          "yaw": 0.5677314807035785,
          "pitch": -0.18791259711865216,
          "rotation": 5.497787143782138,
          "target": "8-stubite"
        },
        {
          "yaw": -3.037742625374369,
          "pitch": 0.13367476016946434,
          "rotation": 0,
          "target": "17-dvorite1"
        }
          ],
      "infoHotspots": []
    },
    {
      "id": "1-hodnik",
      "name": "Hodnik",
      "mapcontainer": "1",
      "x": "42%",
      "y": "62%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6307958819167148,
        "pitch": 0.12377104264069949,
        "fov": 1.4742329502908464
      },
      "linkHotspots": [
        {
          "yaw": 1.4488729816828796,
          "pitch": 0.15722986809527306,
          "rotation": 0,
          "target": "2-dnevni-boravak-kuhinja-i-blagovaonica"
        },
        {
          "yaw": 2.469623446281549,
          "pitch": 0.17053830066193676,
          "rotation": 0,
          "target": "4-ostava"
        },
        {
          "yaw": -2.6364876274848985,
          "pitch": 0.19112068416100492,
          "rotation": 0,
          "target": "5-kupaonica"
        },
        {
          "yaw": -1.7928287450154237,
          "pitch": 0.13689328311958704,
          "rotation": 0,
          "target": "6-radna-soba"
        },
        {
          "yaw": -1.0959425130639122,
          "pitch": 0.14120276454064395,
          "rotation": 0,
          "target": "7-garaa"
        },
        {
          "yaw": 0.030307492149205473,
          "pitch": 0.12026100360860426,
          "rotation": 0,
          "target": "0-ulaz"
        },
        {
          "yaw": -0.389090436547999,
          "pitch": -0.29359854692051535,
          "rotation": 11.780972450961727,
          "target": "8-stubite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dnevni-boravak-kuhinja-i-blagovaonica",
      "name": "Dnevni boravak, kuhinja i blagovaonica",
      "mapcontainer": "1",
      "x": "55%",
      "y": "58%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.8084600195131983,
        "pitch": 0.12107451111739209,
        "fov": 1.4742329502908464
      },
      "linkHotspots": [
        {
          "yaw": 0.5558018591889571,
          "pitch": 0.15054358723946137,
          "rotation": 0,
          "target": "3-terasa"
        },
        {
          "yaw": -2.8220825903284243,
          "pitch": 0.21089778046782293,
          "rotation": 0,
          "target": "1-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-terasa",
      "name": "Terasa",
      "mapcontainer": "1",
      "x": "75%",
      "y": "52%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.8554431640081539,
        "pitch": 0.06690159485145486,
        "fov": 1.4742329502908464
      },
      "linkHotspots": [
        {
          "yaw": -1.3626274310671995,
          "pitch": 0.25472469196903624,
          "rotation": 0,
          "target": "2-dnevni-boravak-kuhinja-i-blagovaonica"
        },
        {
          "yaw": 1.1373193148289111,
          "pitch": 0.14176115998936467,
          "rotation": 0,
          "target": "18-dvorite2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-ostava",
      "name": "Ostava",
      "mapcontainer": "1",
      "x": "46%",
      "y": "75%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.16411598013348083,
        "pitch": 0.059316691816356126,
        "fov": 1.4742329502908464
      },
      "linkHotspots": [
        {
          "yaw": -3.074041849867502,
          "pitch": 0.16460345749727878,
          "rotation": 0,
          "target": "1-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kupaonica",
      "name": "Kupaonica",
      "mapcontainer": "1",
      "x": "40%",
      "y": "75%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.6346965167463843,
        "pitch": 0.06736545277841444,
        "fov": 1.4742329502908464
      },
      "linkHotspots": [
        {
          "yaw": 0.7776891388522529,
          "pitch": 0.1907088208402854,
          "rotation": 0,
          "target": "1-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-radna-soba",
      "name": "Radna soba",
      "mapcontainer": "1",
      "x": "29%",
      "y": "75%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.4153933270214214,
        "pitch": 0.21760262551932996,
        "fov": 1.4742329502908464
      },
      "linkHotspots": [
        {
          "yaw": 2.7998604420182573,
          "pitch": 0.24306147492436025,
          "rotation": 0,
          "target": "1-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-garaa",
      "name": "Garaža",
      "mapcontainer": "1",
      "x": "29%",
      "y": "45%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.12748792615398408,
        "pitch": 0.006262474712958266,
        "fov": 1.4742329502908464
      },
      "linkHotspots": [
        {
          "yaw": -1.5777858644632161,
          "pitch": 0.07405051052208478,
          "rotation": -45,
          "target": "1-hodnik"
        },
        {
          "yaw": -0.4885033932253986,
          "pitch": 0.10169306319344606,
          "rotation": 0,
          "target": "19-dvorite3"
        },
        {
          "yaw": 1.9047860604792826,
          "pitch": 0.15390108081704312,
          "rotation": 0,
          "target": "17-dvorite1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-stubite",
      "name": "Stubište",
      "mapcontainer": "2",
      "x": "39%",
      "y": "59%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4561039912518225,
          "pitch": 0.7647900913587318,
          "rotation": 0,
          "target": "0-ulaz"
        },
        {
          "yaw": 0.17884991978987586,
          "pitch": 0.2122802518907001,
          "rotation": 1.5707963267948966,
          "target": "9-hodnik"
        },
        {
          "yaw": -0.5392462175295254,
          "pitch": 0.23785014144236172,
          "rotation": 0,
          "target": "10-spavaa-soba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-hodnik",
      "name": "Hodnik",
      "mapcontainer": "2",
      "x": "46%",
      "y": "66%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.17261153280966823,
        "pitch": 0.0897621375525226,
        "fov": 1.4742329502908464
      },
      "linkHotspots": [
        {
          "yaw": 0.17261153280966823,
          "pitch": 0.0897621375525226,
          "rotation": 6.283185307179586,
          "target": "16-praonica"
        },
        {
          "yaw": -0.10640473306390064,
          "pitch": 0.11453431239085532,
          "rotation": 5.497787143782138,
          "target": "14-djeja-soba2"
        },
        {
          "yaw": -1.1660248905463035,
          "pitch": 0.30380777061991715,
          "rotation": 0,
          "target": "13-djeja-soba1"
        },
        {
          "yaw": 0.9019517931152023,
          "pitch": 0.18356689468174459,
          "rotation": 0.7853981633974483,
          "target": "15-kupaonica3"
        },
        {
          "yaw": 2.6746911003564477,
          "pitch": 0.1856668593815023,
          "rotation": 0,
          "target": "10-spavaa-soba"
        },
        {
          "yaw": 2.1966623390475375,
          "pitch": 0.2836368519872785,
          "rotation": 2.356194490192345,
          "target": "8-stubite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-spavaa-soba",
      "name": "Spavaća soba",
      "mapcontainer": "2",
      "x": "59%",
      "y": "49%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.33330657788381757,
        "pitch": 0.20043019205837354,
        "fov": 1.4742329502908464
      },
      "linkHotspots": [
        {
          "yaw": -2.1873860246229793,
          "pitch": 0.3708051704830737,
          "rotation": 7.0685834705770345,
          "target": "11-garderoba"
        },
        {
          "yaw": -2.3035793214965707,
          "pitch": 0.0949035258440194,
          "rotation": 0.7853981633974483,
          "target": "12-kupaonica2"
        },
        {
          "yaw": -2.4682072636334684,
          "pitch": 0.1170506295162248,
          "rotation": 4.71238898038469,
          "target": "9-hodnik"
        },
        {
          "yaw": -1.0586828252163425,
          "pitch": 0.15887739854284177,
          "rotation": 4.71238898038469,
          "target": "11-garderoba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-garderoba",
      "name": "Garderoba",
      "mapcontainer": "2",
      "x": "49%",
      "y": "45%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.4314689953951536,
        "pitch": 0.10803716324462442,
        "fov": 1.4742329502908464
      },
      "linkHotspots": [
        {
          "yaw": -1.6216128753153818,
          "pitch": 0.08171447540336985,
          "rotation": 0.7853981633974483,
          "target": "9-hodnik"
        },
        {
          "yaw": -1.6200385419693557,
          "pitch": 0.3405061352264731,
          "rotation": 1.5707963267948966,
          "target": "12-kupaonica2"
        },
        {
          "yaw": 2.8493059584081113,
          "pitch": 0.32355024254026254,
          "rotation": 6.283185307179586,
          "target": "10-spavaa-soba"
        },
        {
          "yaw": -1.943791685895306,
          "pitch": 0.1816135738600977,
          "rotation": 4.71238898038469,
          "target": "10-spavaa-soba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-kupaonica2",
      "name": "Kupaonica2",
      "mapcontainer": "2",
      "x": "41%",
      "y": "45%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.2154547306187382,
        "pitch": 0.2243911928569684,
        "fov": 1.4742329502908464
      },
      "linkHotspots": [
        {
          "yaw": 1.0042069869800052,
          "pitch": 0.1594117383656748,
          "rotation": 0,
          "target": "9-hodnik"
        },
        {
          "yaw": 0.6470166254533876,
          "pitch": 0.1576239123818155,
          "rotation": 0,
          "target": "10-spavaa-soba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-djeja-soba1",
      "name": "Dječja soba1",
      "mapcontainer": "2",
      "x": "54%",
      "y": "64%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.5892429757605875,
        "pitch": 0.09602361504930101,
        "fov": 1.4742329502908464
      },
      "linkHotspots": [
        {
          "yaw": -2.587521734531908,
          "pitch": 0.11675929185174283,
          "rotation": 0,
          "target": "9-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-djeja-soba2",
      "name": "Dječja soba2",
      "mapcontainer": "2",
      "x": "54%",
      "y": "76%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.7232829998983163,
        "pitch": 0.1942280461662378,
        "fov": 1.4742329502908464
      },
      "linkHotspots": [
        {
          "yaw": 0.7965993112396124,
          "pitch": 0.14064054510716062,
          "rotation": 0,
          "target": "9-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-kupaonica3",
      "name": "Kupaonica3",
      "mapcontainer": "2",
      "x": "40%",
      "y": "71%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.432981250670748,
        "pitch": 0.12640330778225461,
        "fov": 1.4742329502908464
      },
      "linkHotspots": [
        {
          "yaw": 2.9322383745960314,
          "pitch": 0.26595384591870896,
          "rotation": 0,
          "target": "9-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-praonica",
      "name": "Praonica",
      "mapcontainer": "2",
      "x": "43%",
      "y": "81%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.136808917260269,
          "pitch": 0.19900410242501643,
          "rotation": 0,
          "target": "9-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-dvorite1",
      "name": "Dvorište1",
      "mapcontainer": "1",
      "x": "40%",
      "y": "17%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.030955398594930017,
          "pitch": 0.00991584862022954,
          "rotation": 0,
          "target": "0-ulaz"
        },
        {
          "yaw": -1.1142613527578078,
          "pitch": 0.031197099162302067,
          "rotation": 0,
          "target": "18-dvorite2"
        },
        {
          "yaw": 1.0441617242535877,
          "pitch": 0.07750741913075743,
          "rotation": 0,
          "target": "7-garaa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-dvorite2",
      "name": "Dvorište2",
      "mapcontainer": "1",
      "x": "90%",
      "y": "46%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.22302900280944193,
          "pitch": 0.059036547524002,
          "rotation": 0,
          "target": "3-terasa"
        },
        {
          "yaw": -0.7324613531742141,
          "pitch": 0.030540240451337297,
          "rotation": 0,
          "target": "19-dvorite3"
        },
        {
          "yaw": 0.6553640518236072,
          "pitch": 0.05120205682239387,
          "rotation": 0,
          "target": "17-dvorite1"
        },
      ],
        "infoHotspots": []
      },
    {
      "id": "19-dvorite3",
      "name": "Dvorište3",
      "mapcontainer": "1",
      "x": "24%",
      "y": "93%",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.17808887482165936,
          "pitch": 0.01511427479187688,
          "rotation": 0,
          "target": "18-dvorite2"
        },
        {
          "yaw": -1.7445252635544275,
          "pitch": 0.0856822285883645,
          "rotation": 0,
          "target": "7-garaa"
        }
  ],
  "infoHotspots": []
}

    
  ],
  "name": "Obiteljska kuća",
  "settings": {
    "mouseViewMode": "drag",
    "deviceOrientationEnabled": true,
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
