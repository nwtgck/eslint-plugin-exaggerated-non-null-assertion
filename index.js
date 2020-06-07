module.exports = {
  rules: {
    "exaggerated-non-null-assertion": {
      create(context) {
        const visited = new WeakSet();
        return {
          TSNonNullExpression(node) {
            if (visited.has(node.parent)) {
              return;
            }
            visited.add(node);
            if (node.expression !== undefined && node.expression.type === 'TSNonNullExpression') {
              visited.add(node.expression);
              if (node.expression.expression !== undefined && node.expression.expression.type === 'TSNonNullExpression') {
                visited.add(node.expression.expression);
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
