import { useCallback, useEffect, useRef } from "react";

export function useIsMounted(initialValue = false): () => boolean {
  const isMounted = useRef(initialValue);
  const get = useCallback(() => isMounted.current, []);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return get;
}
