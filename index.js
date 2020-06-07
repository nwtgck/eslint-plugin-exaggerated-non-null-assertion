module.exports = {
  rules: {
    "exaggerated-non-null-assertion": {
      create(context) {
        const visted = new WeakSet();
        return {
          TSNonNullExpression(node) {
            if (visted.has(node.parent)) {
              return;
            }
            visted.add(node);
            if (node.expression !== undefined && node.expression.type === 'TSNonNullExpression') {
              visted.add(node.expression);
              if (node.expression.expression !== undefined && node.expression.expression.type === 'TSNonNullExpression') {
                visted.add(node.expression.expression);
                return;
              }
            }
            context.report(node, 'Non-null assersion is too less');
          },
        };
      }
    }
  }
};
