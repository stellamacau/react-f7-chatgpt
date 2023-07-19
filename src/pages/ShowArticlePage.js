import { Page, Navbar, Link, Block, f7ready } from "framework7-react";
import { useEffect } from "react";

const ShowArticlePage = ({ title, body, f7router }) => {
  useEffect(() => {
    f7ready((f7) => {
      if (!title || !body) {
        f7.dialog.alert("No article data was provided.", "Error", () => {
          f7router.back();
        });
      }
    });
  }, []);

  return (
    <>
      <Page>
        <Navbar title="Show" backLink="Back"></Navbar>
        <Block>
          {title && body && (
            <>
              <h1>{title}</h1>
              <p>{body}</p>
            </>
          )}

          <Link back>Back</Link>
        </Block>
      </Page>
    </>
  );
};

export default ShowArticlePage;
