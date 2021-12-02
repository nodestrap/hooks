import { useLayoutEffect } from 'react';
/**
 * A React helper hook for using `useLayoutEffect` with a fallback to a regular `useEffect` for environments where `useLayoutEffect` should not be used (such as server-side rendering).
 */
export declare const useIsomorphicLayoutEffect: typeof useLayoutEffect;
