import {
  focalIzquierdoData,
  notex2Data,
  focalDerechoData,
  noteX6Data,
} from "./data";
import Card from "./components/Cards/Card";
import Divider from "./components/Divider";
import Layout from "../src/components/Layout";
import GridContainer from "./components/Containers/Grid";
import TitleContainer from "./components/Containers/TitleContainer";

function App() {
  return (
    <div className="App">
      <Layout>
        <div>
          <GridContainer styleGrid="focal-izquierdo">
            <TitleContainer title="Focal izquierdo" />
            {focalIzquierdoData.map((nota, i) => {
              return (
                <Card
                  author={nota.author}
                  classCard={`card-${i + 1}`}
                  imageAlt={nota.imageAlt}
                  imageNote={nota.imageNote}
                  key={i}
                  lead={nota.lead}
                  subTitle={nota.subTitle}
                  title={nota.title}
                  type={nota.type}
                  urlNota={nota.urlNote}
                />
              );
            })}
          </GridContainer>

          <Divider fullScreen={true} />

          <GridContainer styleGrid="note-x2">
            <TitleContainer title="Nota x2" />
            {notex2Data.map((nota, i) => {
              return (
                <Card
                  classCard={`card-${i + 1}`}
                  imageAlt={nota.imageAlt}
                  imageNote={nota.imageNote}
                  key={i}
                  lead={nota.lead}
                  title={nota.title}
                  type={nota.type}
                  urlNota={nota.urlNote}
                />
              );
            })}
          </GridContainer>

          <Divider fullScreen={true} />

          <GridContainer styleGrid="focal-derecho">
            <TitleContainer title="Focal derecho" />
            {focalDerechoData.map((nota, i) => {
              return (
                <Card
                  classCard={`card-${i + 1}`}
                  imageAlt={nota.imageAlt}
                  imageNote={nota.imageNote}
                  key={i}
                  lead={nota.lead}
                  subTitle={nota.subTitle}
                  title={nota.title}
                  type={nota.type}
                  urlNota={nota.urlNote}
                />
              );
            })}
          </GridContainer>

          <Divider fullScreen={true} />

          <GridContainer styleGrid="note-x6">
            <TitleContainer title="Nota x6" />
            {noteX6Data.map((nota, i) => {
              return (
                <Card
                  author={nota.author}
                  classCard={`card-${i + 1}`}
                  imageAuthor={nota.imageAuthor}
                  imageAlt={nota.imageAlt}
                  imageNote={nota.imageNote}
                  key={i}
                  lead={nota.lead}
                  subTitle={nota.subTitle}
                  title={nota.title}
                  type={nota.type}
                  urlNota={nota.urlNote}
                />
              );
            })}
          </GridContainer>
          <Divider fullScreen={true} />
        </div>
        <div>
          <div className="publicidad">Publicidad</div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
