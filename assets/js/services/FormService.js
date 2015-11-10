'use strict';
angularApp.service('FormService', function FormService($http) {
    return {
        fields: [
        {
            "name": "text",
            "value": "Text",
            "icon": "edit icon",
            "label": "Text"
        }, 
        {
            "name": "textarea",
            "value": "Textarea",
            "icon": "pencil square icon",
            "label": "Textarea"
        }, 
        {
            "name": "wysiwyg",
            "value": "Wysiwyg",
            "icon": "underline icon",
            "label": "Wysiwyg"
        }, 
        {
            "name": "select",
            "value": "Select",
            "icon": "align justify icon",
            "label": "Select"
        }, 
        {
            "name": "radio", 
            "value": "Radio", 
            "icon": "dot circle icon", 
            "label": "Radio"
        }, 
        {
            "name": "url",
            "value": "URL",
            "icon": "linkify icon",
            "label": "URL"
        }, 
        {
            "name": "range", 
            "value": "Range", 
            "icon": "sliders icon", 
            "label": "Range"
        }, 
        {
            "name": "number",
            "value": "Number",
            "icon": "sort icon",
            "label": "Number"
        },
        {
            "name":"email",
            "value":"E-Mail",
            "icon":"envelope icon",
            "label":"E-Mail"
        },
        {
            "name":"telephone",
            "value":"Phone",
            "icon":"phone square icon",
            "label":"Phone"
        },
        {
            "name":"password",
            "value":"Password",
            "icon":"unlock alt icon",
            "label":"Password"
        },
        {
            "name":"submit",
            "value":"Submit Button",
            "icon":"pointing up icon",
            "label":"Submit Button"
        },
        {
            "name":"colorpicker",
            "value":"Color Picker",
            "icon":"eyedropper icon",
            "label":"Color Picker"
        },
        {
            "name":"iconpicker",
            "value":"Icon Picker",
            "icon":"magic icon",
            "label":"Icon Picker"
        },
        {
            "name":"monthpicker",
            "value":"Month Picker",
            "icon":"calendar icon",
            "label":"Month Picker"
        },
        {
            "name":"weekpicker",
            "value":"Week Picker",
            "icon":"calendar icon",
            "label":"Week Picker"
        },
        {
            "name":"datepicker",
            "value":"Date Picker",
            "icon":"calendar icon",
            "label":"Date Picker"
        },
        {
            "name":"timepicker",
            "value":"Time Picker",
            "icon":"clock icon",
            "label":"Time Picker"
        },
        {
            "name":"datetimepicker",
            "value":"Date-Time Picker",
            "icon":"calendar icon",
            "label":"Date-Time Picker"
        }
        ]
    };
});