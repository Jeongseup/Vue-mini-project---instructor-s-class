<template>
    <div
        class="col-xl-4 col-md-12 mb-4"
        :key="course.course_id"
        v-for="course in courseList"
    >
        <div class="card border-bottom-primary shadow h-100 py-2">
            <div class="card-body">
                <h6 style="color:blue" class="col mr-7">
                    과정명: {{ course.name }}
                </h6>
                <div class="no-gutters align-items-center">
                    <h6>
                        기간 :
                        {{ course.start_date }}
                        ~
                        {{ course.end_date }}
                        <br />
                        장소 :
                        {{ course.place }}
                        <br />
                        설명 :
                        {{ course.information }}
                    </h6>
                    <div class="align-items-center">
                        <div class="btn-group" role="group">
                            <button
                                type="button"
                                class="btn  btn-sm btn-primary"
                                style="[text-decoration: none; color:white;]"
                                @click="goToCourse(course.course_id)"
                            >
                                들어가기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        courseList: {
            type: Array,
            default: function() {
                return []
            }
        }
    },
    methods: {
        goToCourse(courseId) {
            this.$router.push({
                path: '/evaltable',
                query: { courseId: courseId }
            })
        }
    }
}
</script>
