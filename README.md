# ![](https://github.com/TonicHabbo/Lucifer-API/blob/master/www/static/lucifer.png)
This is an example plugin for Lucifer, it creates a basic **Database Entity**, uses the internal event dispatcher, and gives an example on how to extend the **Lucifer API**

# Testing
You can test this repository by cloning it into the **plugins** directory with the plugin.json entry being changed to
> "entry": "./ExamplePlugin.ts@ExamplePlugin",

which causes **Lucifer** to reload whenever you edit an example plugin file.

You can also clone this repository outside of the plugins directory, but you can only test the code when its built using
> yarn build

and copying the files in output to **plugins** directory under **Example Plugin**(create this folder) along with your plugin.json from the root of **ExamplePlugin**
