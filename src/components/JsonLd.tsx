type JsonValue = Record<string, unknown> | Record<string, unknown>[];

function sanitize(value: unknown): unknown {
  if (value === undefined || value === null) return undefined;
  if (Array.isArray(value)) {
    const next = value.map(sanitize).filter((v) => v !== undefined);
    return next.length ? next : undefined;
  }
  if (typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      const s = sanitize(v);
      if (s !== undefined) out[k] = s;
    }
    return Object.keys(out).length ? out : undefined;
  }
  return value;
}

type Props = {
  /** One schema object or `@graph` pieces (passed as array → wrapped in `{ "@graph": ... }`). */
  data: JsonValue;
};

export function JsonLd({ data }: Props) {
  const processed = sanitize(data);
  if (processed === undefined) return null;

  const payload = Array.isArray(processed)
    ? { "@context": "https://schema.org", "@graph": processed }
    : typeof processed === "object" &&
        processed !== null &&
        "@context" in processed
      ? processed
      : { "@context": "https://schema.org", ...processed };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
