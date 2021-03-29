import { alert } from '@nativescript/core/ui/dialogs'

import { DelayInfo } from '~/typing/types'

export const showLicenseDialog = (station: DelayInfo) => {
    alert({
        title: "Lizenz",
        message: `${station.photographer}\n${station.license}`,
        okButtonText: 'Ok'
    });
};
