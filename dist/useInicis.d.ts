export declare enum INICIS_OPTIONS_PLATFORM {
    MOBILE = "mobile",
    DESKTOP = "desktop"
}
export interface InicisOptions {
    platform: INICIS_OPTIONS_PLATFORM;
    formId?: string;
}
export default function useInicis<T>({ platform, formId }: InicisOptions, pgRequestParameters: any): T | undefined;
