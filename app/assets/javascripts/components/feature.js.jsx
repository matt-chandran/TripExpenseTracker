
function Feature(props) {
  return (
    <React.Fragment>
      <article className={props.className}>
        <h3>{props.title}</h3>
        <p>{props.about}</p>
      </article>
    </React.Fragment>
  );
}

Feature.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  className: PropTypes.string
};


