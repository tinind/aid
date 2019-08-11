const getInitialProps = (Page, ctx) =>
  typeof Page.getInitialProps === "function" ? Page.getInitialProps(ctx) : {};

const getDisplayName = Component =>
  Component.displayName || Component.name || "AnonymousComponent";

const toDisplayName = (ParentPage, ChildPage) =>
  `composePage(${getDisplayName(ParentPage)}, ${getDisplayName(ChildPage)})`;

export default (ParentPage, ChildPage) => {
  function ComposedPage({ parentProps, childProps }) {
    return (
      <ParentPage {...parentProps}>
        <ChildPage {...childProps} />
      </ParentPage>
    );
  }

  ComposedPage.displayName = toDisplayName(ParentPage, ComposedPage);

  ComposedPage.getInitialProps = async ctx => {
    const parentProps = await getInitialProps(ParentPage, ctx);
    const childProps = await getInitialProps(ChildPage, ctx);

    return {
      parentProps,
      childProps
    };
  };

  return ComposedPage;
};
