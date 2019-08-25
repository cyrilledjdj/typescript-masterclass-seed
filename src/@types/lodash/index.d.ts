import 'lodash';
declare module 'lodash' {
    interface LoDashStatic {
        /**
         * Magic in the gathering
         */
        log: (item: string) => string;

        /**
         * No true champion
         */
        other: () => void;
    }
}