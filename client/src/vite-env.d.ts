/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
    VITE_GOOGLE_MAPS_API_KEYS: string;
}

interface ImportMeta {
    env: ImportMetaEnv;
}