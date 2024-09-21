/*
 * @author Brandon Ramirez <brandon@brr.dev>
 * @copyright Copyright (c) 2024
 */

import { HotKey, HotKeyOptions } from '@brr-dev/hotkey';
import { useEffect } from 'react';

export function useHotKey(options: HotKeyOptions): void {
    useEffect(() => {
        const hotkey = new HotKey(options);
        return () => {
            hotkey.unbind();
        };
    }, []);
}
