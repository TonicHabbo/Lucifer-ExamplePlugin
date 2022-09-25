import { Plugin, GetDatabase, GetWeb, GetEvents, LuciferStartedEvent, IRequest } from 'lucifer-ts';
import { ExampleEntity } from './ExampleEntity';
import { Router, Response } from 'express';

export class ExamplePlugin extends Plugin
{
    /*
     * Change the name of the Plugin below
     */
    constructor() { 
        super("Example Plugin");
        GetEvents().addListener(LuciferStartedEvent.event,this.onLuciferStartedEvent.bind(this));
    }

    /*
     * The emulator calls the plugin onInit
     * Ideally you should register Database Entities here
     */
    protected onInit(): void {
        this.LOGGER.log('Plugin Initialized');
        GetDatabase().addEntity(ExampleEntity);
    }

    /*
     * The function is used as a callback when the event is dispatched
     */
    public onLuciferStartedEvent(event: LuciferStartedEvent): void {
        this.LOGGER.log('Lucifer Started');
    }

    /*
     * Web will cause this function to register API Routes
     */
    public registerApiRoutes(router: Router): void {
        this.LOGGER.log('Registered API Routes')
        router.get('/example', (req: IRequest, res: Response) => {
            res.json({
                message: "Returns message on /api/example"
            })
        })
    }

}
