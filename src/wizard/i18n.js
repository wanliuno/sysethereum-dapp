import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        'step1': 'Step 1',
        'step2': 'Step 2',
        'step3': 'Step 3',
        'step4': 'Step 4',
        'step5': 'Step 5',
        'step6': 'Step 6',
        'repoUrl': 'https://github.com/syscoin/sysethereum-contracts',
        'nextTextOnFinalActionStep': 'Save',
        'nextButtonText': 'Next',
        'backButtonText': 'Back',
        'step1Head': 'Welcome to the official Syscoin to Ethereum Bridge wizard!',
        'step1Description': 'This is a wizard for a bridge for users of Syscoin to walk trustlessly over to Ethereum without any counterparties. A notion of Superblocks is used to aggregate blocks every hour and post the merkle root hash of the aggregate block to an Ethereum contract. An SPV proof of the superblock as well as the Syscoin transaction when walking over the bridge helps to unlock tokens on an ERC20 token that is connected to Syscoin and participating Syscoin Assets. Please click on the Next button below to proceed. The smart contracts can be found here:',
        'step1CurrentSuperblock': 'Superblock Information',
        'step1SuperblockId': 'Superblock ID',
        'step1superblockHeight': 'Current Superblock Height',
        'step1SuperblockBlockHeight': 'Current Syscoin Blockheight',
        'step1MerkleRoot': 'Merkle Root',
        'step1LastBlockTime': 'Current Syscoin Block Time',
        'step1LastBlockHash': 'Current Syscoin Blockhash',
        'step1PreviousBlockTime': 'Previous Syscoin Blockhash',
        'step1PreviousBlockBits': 'Previous Syscoin Difficulty Bits',
        'step1SuperblockApproved': 'Superblock Approved',
        'step1SuperblockParentId': 'Previous Superblock ID',
        'step1SearchBox': 'Enter a hash or height to locate a Superblock...',
        'step1DefaultConfig': 'The default config settings are...',
        'step2Head': 'Step 2: Build a raw unsigned Syscoin Burn transaction',
        'step2Description': 'You may skip this step if you already have an unsigned burn transaction by putting it into the Raw Transaction input box below. Please fill out asset (if applicable), amount, address and then click Generate to create the raw unsigned transaction before proceeding to the next step.',
        'step2Asset': 'A valid Syscoin Asset GUID is required',
        'step2RawTx': 'A valid Syscoin raw transaction is required',
        'step2Amount': 'A valid amount is required',
        'step2EthAddress': 'A valid Ethereum address is required',
        'step2PureComponents': 'You can use Pure React Components as well (as of v4.2.0)!',
        'step2ValidationLogic': '... but you cant provide validation logic here (i.e. you cant specify an',
        'step2Limitation': 'method and have StepZilla use that to determine if it can move to the next step). This is a limitation of using a Pure Component.',
        'step2Checkpoint': '... so use a Pure Component if you just want to show some presentation content and a regular React Component (which extends from React.Component) if you need to provide Component level validation checkpoints via ',
        'step2JumpTo1': 'e.g. showing how we use the jumpToStep method helper method to jump back to step 1',
        'step3Head': 'Step 3: Basic JavaScript Validation Example',
        'step3JavaScriptValidation': 'This example component has a form that uses local standard basic JavaScript validation.',
        'step3Gender': 'Gender',
        'step3PleaseSelect': 'Please select',
        'step3Male': 'Male',
        'step3Female': 'Female',
        'step3Other': 'Other',
        'step3GenderVal': 'A gender selection is required',
        'step3EthAddress': 'A valid ethereum address is required',
        'step4Head': 'Step 4: Form Validation using "react-validation-mixin" Example',
        'step4EmergencyMail': 'Your Emergency Email Address',
        'step4ShownExample': 'As shown in this example, you can also use',
        'step4HandleValidations': 'to handle your validations as well! (as of v4.3.2)!',
        'step4StepZillaSteps': '... so StepZilla step Components can either use basic JS validation or Higer Order Component (HOC) based validation with react-validation-mixin.',
        'step5Head': 'Step 5: Review your Details and Save',
        'step5Gender': 'Gender',
        'step5Email': 'Email',
        'step5EmergencyEmail': 'Emergency Email',
        'step5JumpTo1': 'e.g. showing how we use the jumpToStep method helper method to jump back to step 1',
        'step5Promise': 'Saving to Cloud, pls wait (by the way, we are using a Promise to do this :)...',
        'step6Head': 'Thanks!',
        'step6DataUploaded': 'Data was successfully saved to cloud...',
        'step6GoBack1': 'You have updated data, go',
        'step6GoBack2': 'back',
        'step6GoBack3': 'and Save again!',
      }
    },
    de: {
      translations: {
        'step1': 'Schritt 1',
        'step2': 'Schritt 2',
        'step3': 'Schritt 3',
        'step4': 'Schritt 4',
        'step5': 'Schritt 5',
        'step6': 'Schritt 6',
        'repoUrl': 'https://github.com/syscoin/sysethereum-contracts',
        'nextTextOnFinalActionStep': 'Speichern',
        'nextButtonText': 'Weiter',
        'backButtonText': 'Zurück',
        'step1Head': 'Schritt 1: Willkommen zum offiziellen React-StepZilla-Beispiel',
        'step1SourceDocs': 'de: This is a wizard for a bridge for users of Syscoin to walk trustlessly over to Ethereum without any counterparties. A notion of Superblocks is used to aggregate blocks every hour and post the merkle root hash of the aggregate block to an Ethereum contract. An SPV proof of the superblock as well as the Syscoin transaction when walking over the bridge helps to unlock tokens on an ERC20 token that is connected to Syscoin and participating Syscoin Assets. Please click on the Next button below to proceed. The smart contracts can be found here:',
        'step1CustomConfig': 'Dieses Beispiel verwendet diese benutzerdefinierte Konfiguration (die die Standardkonfiguration überschreibt):',
        'step1CurrentSuperblock': 'de: Superblock Information',
        'step1SuperblockId': 'de: Superblock ID',
        'step1superblockHeight': 'de: Current Superblock Height',
        'step1SuperblockBlockHeight': 'de: Current Syscoin Blockheight',
        'step1MerkleRoot': 'de: Merkle Root',
        'step1LastBlockTime': 'de: Current Syscoin Block Time',
        'step1LastBlockHash': 'de: Current Syscoin Blockhash',
        'step1PreviousBlockTime': 'de: Previous Syscoin Blockhash',
        'step1PreviousBlockBits': 'de: Previous Syscoin Difficulty Bits',
        'step1SuperblockApproved': 'de: Superblock Approved',
        'step1SuperblockParentId': 'de: Previous Superblock ID',
        'step1SearchBox': 'de: Enter a hash or height to locate a Superblock...',
        'step1DefaultConfig': 'Die Standardkonfiguration ist...',
        'step2Head': 'Schritt 2: Pure Component Beispiel',
        'step2PureComponents': 'Sie können auch Pure React Components verwenden (ab v4.2.0)!',
        'step2ValidationLogic': '... aber Sie können hier keine Validierungslogik zur Verfügung stellen (d.h. Sie können keine',
        'step2Limitation': 'Methode schreiben und diese von StepZilla verwenden lassen, um zu bestimmen, ob es zum nächsten Schritt übergehen kann). Dies ist eine Einschränkung bei der Verwendung einer Pure Component.',
        'step2Checkpoint': '... also verwenden Sie eine Pure Component, wenn Sie nur einige Präsentationsinhalte anzeigen möchten und eine reguläre React-Komponente (die sich von React.Component ableitet), wenn Sie Validierungskontrollstellen auf Komponentenebene bereitstellen müssen über ',
        'step2JumpTo1': 'z.B, wie wir die Helfer-Methode der Methode jumpToStep verwenden, um zu Schritt 1 zurückzukehren.',
        'step3Head': 'Schritt 3: Beispiel für eine grundlegende JavaScript-Validierung',
        'step3JavaScriptValidation': 'Diese Beispielkomponente hat ein Formular, das eine lokale Standard-Basis-JavaScript-Validierung verwendet.',
        'step3Gender': 'Geschlecht',
        'step3PleaseSelect': 'Bitte wählen Sie',
        'step3Male': 'männlich',
        'step3Female': 'weiblich',
        'step3Other': 'anderes',
        'step3GenderVal': 'Eine Geschlechtsauswahl ist erforderlich.',
        'step3EmailVal': 'Eine gültige E-Mail ist erforderlich.',
        'step4Head': 'Schritt 4: Formularvalidierung am Beispiel "react-validation-mixin".',
        'step4EmergencyMail': 'Ihre Notfall-E-Mail-Adresse',
        'step4ShownExample': 'Wie in diesem Beispiel gezeigt, können Sie auch ',
        'step4HandleValidations': 'verwenden um Ihre Validierungen zu verwalten! (ab v4.3.2)!',
        'step4StepZillaSteps': '... so dass StepZilla-Step Komponenten entweder die grundlegende JS-Validierung oder die Higer Order Component (HOC) basierte Validierung mit React-Validation-Mixin verwenden können.',
        'step5Head': 'Schritt 5: Überprüfen Sie Ihre Daten und speichern Sie sie.',
        'step5Gender': 'Geschlecht',
        'step5Email': 'E-Mail',
        'step5EmergencyEmail': 'Notfall-E-Mail-Adresse',
        'step5JumpTo1': 'z.B., wie wir die Helfer-Methode der Methode jumpToStep verwenden, um zu Schritt 1 zurückzukehren.',
        'step5Promise': 'Speichern in der Cloud, bitte warten Sie (übrigens verwenden wir ein Promise, um dies zu tun :).....',
        'step6Head': 'Danke!',
        'step6DataUploaded': 'Daten wurden erfolgreich in der Cloud gespeichert......',
        'step6GoBack1': 'Sie haben die Daten aktualisiert, gehen Sie ',
        'step6GoBack2': 'zurück',
        'step6GoBack3': 'und speichern Sie erneut!',
      }
    }
  },
  fallbackLng: 'en',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  },

  react: {
    wait: true
  }
});

export default i18n;
