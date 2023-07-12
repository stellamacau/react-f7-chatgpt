import { Page, Navbar, Toolbar, Link, Block, Button } from "framework7-react";

const HomePage = () => {
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
        {/* Page Content */}
        <Block>
          <p>Page content goes here</p>
          <Link href="/about/">Link to About App</Link>
        </Block>
        <Block>
          <p>Go to page by id</p>
          <Link href="/article/1/">Go to ID:1</Link>
        </Block>
      </Page>
    </>
  );
};

export default HomePage;
