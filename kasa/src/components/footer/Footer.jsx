import KasaLogo from "../logoKasa/_KasaLogo";

function FooterComponent() {
  return (
      <footer style={{
        position: 'absolute',
        left: 0,

        height: '209px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
      }}>
          <KasaLogo fill={'white'} height={'39'} width={'122'}/>
      </footer>
  )
}

export default FooterComponent;