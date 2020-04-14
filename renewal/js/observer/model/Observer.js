class Observer {
  constructor() {
    this.handlers = {};
  }

  register(eventName, handler, context) {
    try {
      let handlers = this.handlers[eventName];

      if (!handlers) {
        handlers = this.handlers[eventName] = [];
      }

      handlers.push({
        handler,
        context
      });
    } catch (err) {
      console.log(err);
    }
  }

  getHandlers(eventName, context) {
    try {
      const handlers = this.handlers[eventName];

      if (!handlers) {
        return [];
      } else {
        const contextHandlers = [];
        for (const currentHandler of handlers) {
          if (currentHandler.context === context) {
            contextHandlers.push(currentHandler);
          }
        }

        return contextHandlers;
      }
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  unRegister(eventName, handler, context) {
    try {
      const handlers = this.handlers[eventName];

      if (!handlers) {
        return;
      }

      for (let idx = 0, len = handlers.length; idx < len; idx++) {
        const currentHandler = handlers[idx];
        if (
          currentHandler.handler === handler &&
          currentHandler.context === context
        ) {
          handlers.splice(idx, 1);
          return;
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  notify(eventName, parameters) {
    try {
      const handlers = this.handlers[eventName];

      if (!handlers) {
        console.log('There is no event');
        return;
      }

      for (const currentHandler of handlers) {
        if (Array.isArray(parameters)) {
          currentHandler.handler.call(currentHandler.context, ...parameters);
        } else {
          currentHandler.handler.call(currentHandler.context, parameters);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export default Observer;
