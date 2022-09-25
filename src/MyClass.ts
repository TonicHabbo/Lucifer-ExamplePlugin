import { Plugin, GetDatabase, GetWeb, GetEvents, LuciferStartedEvent } from 'lucifer-ts';
import { ExampleEntity } from './ExampleEntity';

export class ExamplePlugin extends Plugin
{
    /*
     * Change the name of the Plugin below
     */
    constructor() { 
        super("Example Plugin");
    }

    /*
     * The emulator calls the plugin onInit
     */
    protected async onInit(): Promise<void>
    {
        this.LOGGER.log('hello');
        GetDatabase().addEntity(ExampleEntity);

        GetEvents().addListener(LuciferStartedEvent.event, (event: LuciferStartedEvent) => {
            GetWeb().router.use('/api/test', async (req,res) => {
                res.json(await ExampleEntity.createQueryBuilder().getMany())
            })
        })
    }
}
