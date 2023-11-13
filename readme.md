# alrenamer 

Alrenamer is a command line tool for automatically renaming AL files. 

Whenever you want to rename the AL files say after a change in the object id or Object name, you 
just run the command `alrenamer` from the command line and all .al files in the current directory and subdirectories will be renamed. This means that you never have to worry upfront about what to name your files. 

All the files in the folder get renamed. The new name is got from the contents of the file. Examples of sample generated filenames are:
- page 51402801 BankPayment.al
- pageextension 51402805 SwiftCodePgExt.al
- permissionset 51402812 Bank Int.al
- report 51402800 BankPaymentReport.al
- tableextension 51402805 SwiftCodeExt.al
- table 51402800 BankIntSetup.al

The filenaming convention used makes it easy to detect which IDs are in use and also organises the files alphabetically for easy identification.

Below are the steps for installing and running `alrenamer` for the first time.

You need to have [nodejs ](https://nodejs.org/en/) installed and then followed below steps from your project (any folder with .al files in it).

1. Install alrenamer:
`npm install --global @passioncloud/alrenamer`

1. Enable running scripts:
`set-executionpolicy -scope currentuser remotesigned`

2. Rename the AL files
`alrenamer`

I will really appreciate the support, thanks!