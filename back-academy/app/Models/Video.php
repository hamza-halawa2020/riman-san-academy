<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;
    protected $fillable = [
        'video',
        'course_video_id',
    ];


    public function courseVideoId()
    {
        return $this->belongsTo(CourseVideo::class);
    }
    public function accessVideoToUser()
    {
        return $this->hasMany(AccessVideosToUser::class);
    }
}
