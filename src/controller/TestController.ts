import { Context } from "koa";

export async function testController(context: Context) {
    console.info(`### Start testController ###`);
    context.body = 'hello world';
}