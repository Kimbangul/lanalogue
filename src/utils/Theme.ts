const color = {
  bg: '#101010',
  text06: '#111',
  text05:'#262626',
  text04:'#333',
  text03: '#444',
  text02: '#555',
  text01: '#666', 
  point01: '#ff7675',
  white01: '#fff',
  white02: '#f2f2f2',
  white03: '#e0e0e0',
  white04: '#d0d0d0',
  white05: '#c0c0c0',
  white06: '#b0b0b0',
}

const fontSize = {
  body: {
    xs: '1.2rem',
    sm: '1.4rem',
    rg: '1.6rem',
    md: '1.8rem',
    lg: '2rem',
  },
  head: {
    xs: '2.4rem',
    sm: '2.8rem',
    rg: '3.2rem',
    md: '3.6rem',
    lg: '4.2rem',
    xl: '4.8rem',
    ul: '5.6rem',
  },
};

const screenSize = {
  mb: 500,
  tb: 768,
  pc: 1080,
  "pc-l": 1200,
}


const theme = {
  color: {...color},
  fontSize: {...fontSize},
  screenSize: {...screenSize},
}

export default theme;