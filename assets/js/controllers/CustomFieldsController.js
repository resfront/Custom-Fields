'use strict';
angularApp.controller('CustomFieldsController', function ($scope, FormService) {

    // new form
    $scope.form = {};

    // true / false modules 
    $scope.form.form_modules =
    {
        gallery: true,
        file: false,
        googlemap: false,
        youtube: true,
        vimeo: false,
        instagram: true,
    }
    $scope.form.form_fields = [
        {
          "field_id": 1,
          "field_type": "text",
          "field_title": "Movie Title",
          "field_name": "movie_title",
          "field_description": "",
          "field_placeholder": "",
          "field_value": "",
          "field_required" : false,
          "field_disabled" : false,
          "field_min_value": "0",
          "field_max_value": "100",
          "field_step_value": "5"
        },
        {
          "field_id": 2,
          "field_type": "text",
          "field_title": "Director",
          "field_name": "director",
          "field_description": "",
          "field_placeholder": "",
          "field_value": "",
          "field_required" : false,
          "field_disabled" : false,
          "field_min_value": "0",
          "field_max_value": "100",
          "field_step_value": "5"
        },
        {
          "field_id": 3,
          "field_type": "textarea",
          "field_title": "Cast",
          "field_name": "cast",
          "field_description": "",
          "field_placeholder": "",
          "field_value": "",
          "field_required" : false,
          "field_disabled" : false,
          "field_min_value": "0",
          "field_max_value": "100",
          "field_step_value": "5"
        },
        {
          "field_id": 4,
          "field_type": "text",
          "field_title": "Writers",
          "field_name": "writers",
          "field_description": "",
          "field_placeholder": "",
          "field_value": "",
          "field_required" : false,
          "field_disabled" : false,
          "field_min_value": "0",
          "field_max_value": "100",
          "field_step_value": "5"
        },
        {
          "field_id": 5,
          "field_type": "text",
          "field_title": "Music",
          "field_name": "music",
          "field_description": "",
          "field_placeholder": "",
          "field_value": "",
          "field_required" : false,
          "field_disabled" : false,
          "field_min_value": "0",
          "field_max_value": "100",
          "field_step_value": "5"
        },
        {
          "field_id": 6,
          "field_type": "radio",
          "field_title": "Genres",
          "field_name": "genres",
          "field_description": "",
          "field_placeholder": "",
          "field_value": "",
          "field_required" : false,
          "field_disabled" : false,
          "field_min_value": "0",
          "field_max_value": "100",
          "field_step_value": "5",
          "field_options": [
            {
              "option_id": 1,
              "option_title": "Action",
              "option_value": 1
            },
            {
              "option_id": 2,
              "option_title": "Adventure",
              "option_value": 2
            },
            {
              "option_id": 3,
              "option_title": "Fantasy",
              "option_value": 3
            },
            {
              "option_id": 4,
              "option_title": "Western",
              "option_value": 4
            }
          ]
        },
        {
          "field_id": 7,
          "field_type": "wysiwyg",
          "field_title": "Plot Summary",
          "field_name": "plot",
          "field_description": "",
          "field_placeholder": "",
          "field_value": "",
          "field_required" : false,
          "field_disabled" : false,
          "field_min_value": "0",
          "field_max_value": "100",
          "field_step_value": "5"
        },
        {
          "field_id": 8,
          "field_type": "datepicker",
          "field_title": "Released Date",
          "field_name": "released_date",
          "field_description": "",
          "field_placeholder": "",
          "field_value": "",
          "field_required" : false,
          "field_disabled" : false,
          "field_min_value": "0",
          "field_max_value": "100",
          "field_step_value": "5"
        },
        {
          "field_id": 9,
          "field_type": "select",
          "field_title": "Rating",
          "field_name": "rating",
          "field_description": "",
          "field_placeholder": "",
          "field_value": "",
          "field_required" : false,
          "field_disabled" : false,
          "field_min_value": "0",
          "field_max_value": "100",
          "field_step_value": "5",
          "field_options": [
            {
              "option_id": 1,
              "option_title": 1,
              "option_value": 1
            },
            {
              "option_id": 2,
              "option_title": 2,
              "option_value": 2
            },
            {
              "option_id": 3,
              "option_title": 3,
              "option_value": 3
            },
            {
              "option_id": 4,
              "option_title": 4,
              "option_value": 4
            },
            {
              "option_id": 5,
              "option_title": 5,
              "option_value": 5
            }
          ]
        }
    ]

    /*
     Setup Fields
    */
    $scope.addField = {};
    $scope.addField.types = FormService.fields;
    $scope.addField.new = $scope.addField.types[0].name;
    $scope.addField.lastAddedID = new Date(); // for ids
    //$scope.addField.lastAddedID = Math.random();

    $scope.addFieldButton = function (field_name) {
        $scope.addField.new = field_name;
        $scope.addField.lastAddedID++;

        var newField = {
            "field_id": $scope.addField.lastAddedID,
            "field_type": $scope.addField.new,
            "field_title": "Input Title",
            "field_name": "input_name",
            "field_description": "",
            "field_placeholder": "",
            "field_value": "",
            "field_required" : false,
            "field_disabled" : false,
            "field_min_value": "0",
            "field_max_value": "100",
            "field_step_value": "5"
        };
        $scope.form.form_fields.push(newField);
    }

    // Delete Field
    $scope.deleteField = function (field_id) {
        for (var i = 0; i < $scope.form.form_fields.length; i++) {
            if ($scope.form.form_fields[i].field_id == field_id) {
                $scope.form.form_fields.splice(i, 1);
                event.preventDefault();
                break;
            }
        }
    }

    // Count using fields
    $scope.countFields = function (field) {
        var count = 0;
        $scope.form.form_fields.forEach(function (form_field) {
            if (form_field.field_type === field) {
                count++;
            }
        });
        return count;
    };

    /*
     Field Options 
    */
    $scope.addOption = function (field) {
        if (!field.field_options)
            field.field_options = new Array();

        var lastOptionID = 0;

        if (field.field_options[field.field_options.length - 1])
            lastOptionID = field.field_options[field.field_options.length - 1].option_id;

        var option_id = lastOptionID + 1;

        var newOption = {
            "option_id": option_id,
            "option_title": option_id,
            "option_value": option_id
        };

        field.field_options.push(newOption);
    }
    // delete
    $scope.deleteOption = function (field, option) {
        for (var i = 0; i < field.field_options.length; i++) {
            if (field.field_options[i].option_id == option.option_id) {
                field.field_options.splice(i, 1);
                break;
            }
        }
    }
    // View options for only radio and select form types
    $scope.showAddOptions = function (field) {
        if (field.field_type == "radio" || field.field_type == "select")
            return true;
        else
            return false;
    }

    // View options for only range form type
    $scope.rangeOptions = function (field) {
        if (field.field_type == "range")
            return true;
        else
            return false;
    }

    // View options for only number form type
    $scope.numberOptions = function (field) {
        if (field.field_type == "number")
            return true;
        else
            return false;
    }

    // Reset all
    $scope.reset = function () {
        $scope.form.form_fields.splice(0, $scope.form.form_fields.length);
        $scope.addField.lastAddedID = 0;
    }

    // Sortable options
    $scope.sortableOptions = {
        handle: ' .handle',
        axis: 'y',

        update: function (e, ui) {
            //console.log('update');
        },
    }

});