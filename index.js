// TODO: the number of "!" is hard coded

module.exports = {
  rules: {
    "exaggerated-non-null-assertion": {
      meta: {
        messages: {
          nonNullAssertionTooLess: 'Non-null assertion is too less'
        },
        fixable: 'code',
      },
      create(context) {
        const visited = new WeakSet();
        return {
          TSNonNullExpression(node) {
            if (visited.has(node.parent)) {
              return;
            }
            let nNonNullAssertion = 1;
            visited.add(node);
            if (node.expression !== undefined && node.expression.type === 'TSNonNullExpression') {
              nNonNullAssertion++;
              visited.add(node.expression);
              if (node.expression.expression !== undefined && node.expression.expression.type === 'TSNonNullExpression') {
                nNonNullAssertion++;
                visited.add(node.expression.expression);
                return;
              }
            }
            context.report({
              node,
              messageId: 'nonNullAssertionTooLess',
              fix(fixer) {
                return fixer.insertTextAfter(node, "!".repeat(3 - nNonNullAssertion));
              }
            });
          },
        };
      }
    }
  }
};
