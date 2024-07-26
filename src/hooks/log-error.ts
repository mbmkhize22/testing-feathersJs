// For more information about this file see https://dove.feathersjs.com/guides/cli/log-error.html
import type { HookContext, NextFunction } from '../declarations'
import { logger } from '../logger'

export const logError = async (context: HookContext, next: NextFunction) => {
  try {
    // Get the method name (e.g., 'find', 'get', 'create')
    const methodName = context.method;

    // Get the service name
    const serviceName = context.path;

    console.log(`Method: ${methodName}`);
    console.log(`Service: ${serviceName}`);

    if (context.params && context.params.user) {
      console.log('Authenticated user:', context.params.user);
    } else {
      console.log('No authenticated user');
    }

    console.log("Nhlanhla start error hook 1");
    await next()
    console.log("Nhlanhla end error hook 1");
  } catch (error: any) {
    console.log("Nhlanhla catch error hook 1..");
    logger.error(error.stack)

    // Log validation errors
    if (error.data) {
      logger.error('Data: %O', error.data)
    }

    throw error
  }
}
