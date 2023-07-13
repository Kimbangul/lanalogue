import type { ISourceOptions, Engine } from "tsparticles-engine";
import { loadFireflyPreset } from "tsparticles-preset-firefly";

export const customInit = async (engine: Engine): Promise<void> => {
    await loadFireflyPreset(engine);
}

const config : ISourceOptions = {
    // "particles":{
	// 	"number":{
	// 		"value":80,
	// 		"density":{
	// 			"enable":true,
	// 			"value_area":800
	// 		}
	// 	},
	// 	"color":{
	// 		"value":"#ffffff"
	// 	},
	// 	"shape":{
	// 		"type":"circle",
	// 		"stroke":{
	// 			"width":0
	// 		},
	// 		},
	// 	"opacity":{
	// 		"value":1,
	// 		"random":true,
	// 		"anim":{
	// 			"enable":true,
	// 			"speed":3,
	// 			"opacity_min":0,
	// 			"sync":false
	// 		}
	// 	},
	// 	"size":{
	// 		"value":2,
	// 		"random":true,
	// 		"anim":{
	// 			"enable":false,
	// 			"speed":4,
	// 			"size_min":0.3,
	// 			"sync":false
	// 		}
	// 	},
	// 	"line_linked":{
	// 		"enable":false,
	// 	},
	// 	"move":{
	// 		"enable":true,
	// 		"speed":1,
	// 	"direction":"right",
	// 	"random":true,
	// 	"straight":true,
	// 		"out_mode":"out",
	// 		"bounce":false,
	// 		"attract":{
	// 			"enable":true,
	// 			"rotateX":300,
	// 			"rotateY":600
	// 		}
	// 	}
	// },
	// "interactivity":{
	// 	"detect_on":"canvas",
	// 	"events":{
	// 		"onhover":{
	// 			"enable":false,
	// 		},
	// 		"onclick":{
	// 			"enable":false,
	// 		},
	// 		"resize":true
	// 	}
	// },
	// "retina_detect":true
    particles: {
        shape: {
          type: "square", // starting from v2, this require the square shape script
        },
      },
      preset: "firefly",
}

export default config;