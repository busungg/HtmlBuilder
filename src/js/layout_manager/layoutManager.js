const Layout = require('./model/layout');

//U.contentLayout 사용 -- 확인 필요

/**
 * Layout Manager(Layout을 관리한다)
 */
var layoutManager = {
    /**
     * Find layout that has same id(id에 해당하는 layout을 return)
     * @param {string} layoutId 
     * @param {Layout} layout 
     */
    selectLayout: function (layoutId, layout) {
        try {
            var selectedLayout = null;

            if (layoutId == layout._info.layoutId) {
                return layout;
            } else {
                for (var i = 0, len = layout.child.length; i < len; i++) {
                    if (selectedLayout = layoutManager.selectLayout(layoutId, layout.child[i])) {
                        return selectedLayout;
                    }
                }

                return null;
            }
        } catch (err) {
            console.log(err.message);
        }
    },
    
    /**
     * Update layout - Width, Height, X, Y, Etc...
        (
            1. Parent layout 입력 받아서 모든 Child의 layout을 재조정
            2. 기존 작성된 HTML Import 고려 필요
            3. offsetLeft offsetTop은 자기자신의 부모 위치를 시작점으로 정함
                - margin
                - padding
            4. resizing 될때 update 필요
        )
     * @param {Layout} layout 
     */
    updateLayout: function (layout) {
        try {
            if (layout) {
                var child = layout.dom;
                var childRect = child.getBoundingClientRect();
                var style = window.getComputedStyle(child); //CSS 속성까지 적용 된다.
                var parentLayout, parentStyle, posParent = child.parentElement;

                while (posParent) {
                    parentStyle = window.getComputedStyle(posParent);
                    if (parentStyle.position === 'relative' || parentStyle.position === 'absolute') {
                        break;
                    }

                    posParent = posParent.parentElement;
                }

                if (posParent) {
                    parentLayout = layoutManager.selectLayout(posParent.getAttribute('hb_layout_id'), U.contentLayout);
                    layout.pos.x = (child.offsetLeft ? (child.offsetLeft + parentLayout.pos.x) : parentLayout.pos.x);
                    layout.pos.y = (child.offsetTop ? (child.offsetTop + parentLayout.pos.y) : parentLayout.pos.y);
                    layout.pos.width = (child.scrollWidth ? child.scrollWidth : childRect.width);
                    layout.pos.height = (child.scrollHeight ? child.scrollHeight : childRect.height);
                } else {
                    layout.pos.x = (child.offsetLeft ? child.offsetLeft : childRect.left);
                    layout.pos.y = (child.offsetTop ? child.offsetTop : childRect.top);
                    layout.pos.width = (child.scrollWidth ? child.scrollWidth : childRect.width);
                    layout.pos.height = (child.scrollHeight ? child.scrollHeight : childRect.height);
                }

                for (var i = 0, len = layout.child.length; i < len; i++) {
                    layoutManager.updateLayout(layout.child[i]);
                }
            }
        } catch (err) {
            console.log(err.message);
        }
    },

    /**
     * Add child layout to parent layout (parent layout에 child layout 추가)
     * @param {Layout} parent 
     * @param {Layout} child 
     * @param {number} position 
     */
    addLayout: function(parent, child, position) {
        var parentLayout, childLayout;

        if(typeof parent === 'string') {
          parentLayout = layoutManager.selectLayout(parent, U.contentLayout);
        } else {
          parentLayout = parent;
        }

        if(typeof child === 'string') {
          childLayout = layoutManager.selectLayout(child, U.contentLayout);
        } else {
          childLayout = child;
        }

        childLayout.info.parentLayoutId = parentLayout.info.layoutId;

        parentLayout.child.splice(position, 0, childLayout);
      }
};