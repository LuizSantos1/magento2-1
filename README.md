# Fluxx Magento 2
![Fluxx](view/adminhtml/web/images/logo.svg)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a9ca416ca6b04eaca9b2c94cf61b5e2b)](https://app.codacy.com/manual/DevMagentoFluxx/magento2?utm_source=github.com&utm_medium=referral&utm_content=DevMagentoFluxx/magento2&utm_campaign=Badge_Grade_Dashboard) [![StyleCI](https://github.styleci.io/repos/257997111/shield?branch=master)]

## Extension features

1. Installment payment slip for your client
2. Payment method without redirection
3. Automatic status return

## Installation

We recommend installing by [composer](README.md#via-composer), but you can also do it [manually](README.md#manual).after installation it is necessary to [enable](README.md#enable) the module.

### Composer (recomendada)

``` sh
composer require fluxxbrasil/magento2
```

### Manually

1. [Download](https://github.com/DevMagentoFluxx/magento2/archive/master.zip)
2. On your computer unzip the file
3. Navigate to the [root directory](https://devdocs.magento.com/guides/v2.3/install-gde/basics/basics_docroot.html) of the Magento 2
4. On your server create folder Fluxx in public_html/app/code/
5. Send folder Magento2 to public_html/app/code/Fluxx

#### Enable

``` sh
php bin/magento module:enable Fluxx_Magento2
bin/magento setup:upgrade --keep-generated 
```

## Configuration

After installation follow the steps in the **order** presented:

Attribute Relationship Definition:

In STORES -> Configuration -> Payment Method -> Fluxx -> Attribute Relationship Definition

 1. The CPF will be an attribute obtained from the
 2. The CPF attribute is
 3. The Street attribute is
 4. The address number is
 5. The address district is
 6. The address complement is

In STORES -> Configuration -> Payment Method -> Fluxx -> Credentials

 1. Environment
 2. Merchant Gateway Username
 3. Merchant Gateway Key

## Technical feature

### Module configuration
1. Package details [composer.json](composer.json).
2. Module configuration details (sequence) in [module.xml](etc/module.xml).
3. Module configuration available through Stores->Configuration [system.xml](etc/adminhtml/system.xml)

Payment gateway module depends on `Sales`, `Payment` and `Checkout` Magento modules.
For more module configuration details, please look through [module development docs](http://devdocs.magento.com/guides/v2.0/extension-dev-guide/module-load-order.html).

### Dependency Injection configuration
> To get more details about dependency injection configuration in Magento 2, please see [DI docs](http://devdocs.magento.com/guides/v2.0/extension-dev-guide/depend-inj.html).

In a case of Payment Gateway, DI configuration is used to define pools of `Gateway Commands` with related infrastructure and to configure `Payment Method Facade` (used by `Sales` and `Checkout` modules to perform commands)

## License
[Open Source License](LICENSE.txt)

