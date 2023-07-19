import { Page, Navbar, Link, Block } from "framework7-react";
import { useState, useEffect } from "react";

const ArticlePage = ({ id }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, []);

  return (
    <>
      <Page>
        <Navbar title="Article" backLink="Back"></Navbar>
        <Block>
          <p>This is article {id}</p>

          {article && (
            <>
              <h1>{article.title}</h1>
              <p>{article.body}</p>
            </>
          )}

          <Link back>Back</Link>
        </Block>
      </Page>
    </>
  );
};

export default ArticlePage;
