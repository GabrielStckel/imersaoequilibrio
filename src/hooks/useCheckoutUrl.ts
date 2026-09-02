import { useEffect, useState } from "react";
import { CHECKOUT_BASE } from "@/config/checkout";

export function useCheckoutUrl() {
  const [url, setUrl] = useState(CHECKOUT_BASE);

  useEffect(() => {
    const extras = window.location.search.replace(/^\?/, "");
    setUrl(extras ? `${CHECKOUT_BASE}&${extras}` : CHECKOUT_BASE);
  }, []);

  return url;
}
