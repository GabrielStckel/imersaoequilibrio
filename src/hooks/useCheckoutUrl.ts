import { useEffect, useState } from "react";
import { CHECKOUT_BASE } from "@/config/checkout";
import { buildCheckoutUrl } from "@/lib/checkout";

export function useCheckoutUrl() {
  const [url, setUrl] = useState(CHECKOUT_BASE);

  useEffect(() => {
    setUrl(buildCheckoutUrl());
  }, []);

  return url;
}
