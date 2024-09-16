export default function Picture({ sources, imgAttr }) {

  return (
    <picture>
      {sources ? (sources.map((source, id) => <source key={id} {...source} />)) : null}
      <img {...imgAttr} alt={imgAttr.alt} />
    </picture>
  );
};