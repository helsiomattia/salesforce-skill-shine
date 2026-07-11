import { describe, expect, it } from "vitest";

import pt from "@/locales/pt/common.json";
import en from "@/locales/en/common.json";
import es from "@/locales/es/common.json";

type JsonObject = Record<string, unknown>;

const flattenKeys = (value: JsonObject, prefix = ""): string[] => Object.keys(value).flatMap((key) => {
  const path = prefix ? `${prefix}.${key}` : key;
  const child = value[key];

  if (child && typeof child === "object" && !Array.isArray(child)) {
    return flattenKeys(child as JsonObject, path);
  }

  return [path];
});

describe("i18n locale keys", () => {
  it("keeps pt, en and es common.json keys synchronized", () => {
    const ptKeys = flattenKeys(pt).sort();

    expect(flattenKeys(en).sort()).toEqual(ptKeys);
    expect(flattenKeys(es).sort()).toEqual(ptKeys);
  });
});
