import { useState, useEffect } from "react";
import {
  Page,
  Navbar,
  Toolbar,
  Link,
  Block,
  Button,
  f7,
  useStore,
} from "framework7-react";

const HomePage = ({ f7router }) => {
  const count = useStore("count");
  const [id, setId] = useState("");

  return (
    <>
      {/*  Initial Page */}
      <Page>
        {/* Top Navbar */}
        <Navbar title="Awesome App">
          <Link slot="left">Left Link</Link>
          <Link slot="right">Right Link</Link>
        </Navbar>
        {/* Toolbar */}
        <Toolbar bottom>
          <Link>Link 1</Link>
          <Link>Link 2</Link>
        </Toolbar>
        <h2>count: {count}</h2>
        <Button
          onClick={() => {
            f7.store.dispatch("setCount", count + 1);
          }}
        >
          Add
        </Button>
        {/* Page Content */}
        <Block>
          <p>Page content goes here</p>
          <Link href="/about/">Link to About App</Link>
        </Block>
        <Block>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded border-slate-400"
            placeholder="Note title"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Block>
        <Block>
          <Button fill href="/article/1/">
            Go to Article ID: {id}
          </Button>
        </Block>
        <Block>
          <Button
            fill
            onClick={() => {
              f7router.navigate("/show/", {
                props: {
                  title: "The Title",
                  body: "This is the body",
                },
              });
            }}
          >
            Send via Navigate API
          </Button>
        </Block>
      </Page>
    </>
  );
};

export default HomePage;
